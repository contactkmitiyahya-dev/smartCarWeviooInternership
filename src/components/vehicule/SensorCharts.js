import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './sensorCharts.css';

export default function SensorCharts({ data }) {
    return (
        <div className="sensor-charts">
            <h3 className="sensor-charts-title">Données capteurs</h3>

            <div className="sensor-chart-grid">
                <div className="sensor-chart-card">
                    <span className="sensor-chart-label">RPM moteur</span>
                    <ResponsiveContainer width="100%" height={160}>
                        <LineChart data={data}>
                            <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                            <XAxis dataKey="date" stroke="#64748b" fontSize={11} />
                            <YAxis stroke="#64748b" fontSize={11} width={35} />
                            <Tooltip contentStyle={{ background: '#0a101e', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8 }} />
                            <Line type="monotone" dataKey="rpm" stroke="#38bdf8" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="sensor-chart-card">
                    <span className="sensor-chart-label">Température (°C)</span>
                    <ResponsiveContainer width="100%" height={160}>
                        <LineChart data={data}>
                            <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                            <XAxis dataKey="date" stroke="#64748b" fontSize={11} />
                            <YAxis stroke="#64748b" fontSize={11} width={35} />
                            <Tooltip contentStyle={{ background: '#0a101e', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8 }} />
                            <Line type="monotone" dataKey="temp" stroke="#818cf8" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="sensor-chart-card">
                    <span className="sensor-chart-label">Tension batterie (V)</span>
                    <ResponsiveContainer width="100%" height={160}>
                        <LineChart data={data}>
                            <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                            <XAxis dataKey="date" stroke="#64748b" fontSize={11} />
                            <YAxis stroke="#64748b" fontSize={11} width={35} domain={['auto', 'auto']} />
                            <Tooltip contentStyle={{ background: '#0a101e', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8 }} />
                            <Line type="monotone" dataKey="voltage" stroke="#4ade80" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}