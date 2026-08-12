-- Extension nécessaire pour gen_random_uuid()
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- ============================================
-- USERS
-- ============================================
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    avatar_url VARCHAR(500),
    role VARCHAR(10) NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin')),
    language VARCHAR(5) NOT NULL DEFAULT 'fr',
    email_verified BOOLEAN NOT NULL DEFAULT false,
    notification_prefs JSONB NOT NULL DEFAULT '{}',
    oauth_provider VARCHAR(20),
    oauth_id       VARCHAR(100),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX idx_users_oauth ON users(oauth_provider, oauth_id)
    WHERE oauth_provider IS NOT NULL;

-- ============================================
-- VEHICLES
-- ============================================
CREATE TABLE vehicles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    make VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    year INTEGER NOT NULL CHECK (year BETWEEN 1990 AND 2030),
    vin VARCHAR(17) UNIQUE,
    plate_number VARCHAR(20),
    current_mileage_km INTEGER NOT NULL,
    photo_url VARCHAR(500),
    health_score DECIMAL(5,2),
    is_deleted BOOLEAN NOT NULL DEFAULT false,
    deleted_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_vehicles_user_id ON vehicles(user_id);

-- ============================================
-- UPLOADS
-- ============================================
CREATE TABLE uploads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    vehicle_id UUID NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
    filename VARCHAR(255) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'processing' CHECK (status IN ('processing', 'success', 'failed')),
    row_count INTEGER,
    errors JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_uploads_vehicle_id ON uploads(vehicle_id);

-- ============================================
-- SENSOR READINGS
-- ============================================
CREATE TABLE sensor_readings (
    id BIGSERIAL PRIMARY KEY,
    vehicle_id UUID NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
    timestamp TIMESTAMPTZ NOT NULL,
    engine_rpm REAL,
    vehicle_speed_kmh REAL,
    coolant_temp_c REAL,
    intake_air_temp_c REAL,
    maf_airflow_gs REAL,
    throttle_position_pct REAL,
    fuel_level_pct REAL,
    control_module_voltage_v REAL,
    engine_load_pct REAL,
    short_fuel_trim_pct REAL,
    long_fuel_trim_pct REAL,
    ambient_temp_c REAL,
    barometric_pressure_kpa REAL,
    upload_id UUID REFERENCES uploads(id)
);

CREATE INDEX idx_sensor_readings_vehicle_time ON sensor_readings(vehicle_id, timestamp DESC);
CREATE INDEX idx_sensor_readings_upload_id ON sensor_readings(upload_id);

-- ============================================
-- DTC ENTRIES
-- ============================================
CREATE TABLE dtc_entries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    vehicle_id UUID NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
    timestamp TIMESTAMPTZ NOT NULL,
    dtc_code VARCHAR(10) NOT NULL,
    description VARCHAR(255),
    severity VARCHAR(10) NOT NULL CHECK (severity IN ('low', 'medium', 'high')),
    component_category VARCHAR(50) NOT NULL,
    status VARCHAR(15) NOT NULL CHECK (status IN ('pending', 'confirmed', 'permanent', 'cleared')),
    mil_active BOOLEAN NOT NULL DEFAULT false,
    freeze_frame JSONB
);

CREATE INDEX idx_dtc_vehicle_time ON dtc_entries(vehicle_id, timestamp DESC);
CREATE INDEX idx_dtc_code ON dtc_entries(dtc_code);

-- ============================================
-- MAINTENANCE RECORDS
-- ============================================
CREATE TABLE maintenance_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    vehicle_id UUID NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
    service_date DATE NOT NULL,
    service_type VARCHAR(100) NOT NULL,
    mileage_at_service_km INTEGER NOT NULL,
    cost DECIMAL(10,2),
    parts_replaced TEXT,
    shop VARCHAR(100),
    notes TEXT,
    next_due_km INTEGER,
    next_due_date DATE
);

CREATE INDEX idx_maintenance_vehicle_date ON maintenance_records(vehicle_id, service_date DESC);

-- ============================================
-- PREDICTIONS
-- ============================================
CREATE TABLE predictions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    vehicle_id UUID NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
    prediction_type VARCHAR(20) NOT NULL CHECK (prediction_type IN ('anomaly', 'failure', 'maintenance', 'forecast')),
    model_version VARCHAR(50) NOT NULL,
    input_summary JSONB NOT NULL,
    result JSONB NOT NULL,
    confidence DECIMAL(5,4),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_predictions_vehicle_date ON predictions(vehicle_id, created_at DESC);
CREATE INDEX idx_predictions_type ON predictions(prediction_type);

-- ============================================
-- NOTIFICATIONS
-- ============================================
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    vehicle_id UUID REFERENCES vehicles(id) ON DELETE CASCADE,
    type VARCHAR(10) NOT NULL CHECK (type IN ('info', 'warning', 'critical')),
    title VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_notifications_user_unread ON notifications(user_id, is_read, created_at DESC);

-- ============================================
-- REFRESH TOKENS
-- ============================================
CREATE TABLE refresh_tokens (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    token_hash VARCHAR(255) NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    is_revoked BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_refresh_tokens_user_id ON refresh_tokens(user_id);

-- ============================================
-- MIGRATION — à exécuter sur une base existante
-- (inutile si vous appliquez ce schema.sql from scratch)
-- ============================================
-- ALTER TABLE users
--     ADD COLUMN IF NOT EXISTS oauth_provider VARCHAR(20),
--     ADD COLUMN IF NOT EXISTS oauth_id       VARCHAR(100);
--
-- CREATE UNIQUE INDEX IF NOT EXISTS idx_users_oauth
--     ON users(oauth_provider, oauth_id)
--     WHERE oauth_provider IS NOT NULL;