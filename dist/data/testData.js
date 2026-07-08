"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allNotifications = exports.alerts = void 0;
exports.getAllMaintenanceHistory = getAllMaintenanceHistory;
exports.getAllRecommendations = getAllRecommendations;
exports.getAllUpcomingMaintenance = getAllUpcomingMaintenance;
exports.getGlobalRiskOverview = getGlobalRiskOverview;
exports.getHealthSummary = getHealthSummary;
exports.getMaintenanceSchedule = getMaintenanceSchedule;
exports.getPredictions = getPredictions;
exports.getUploadHistory = getUploadHistory;
exports.getVehicleById = getVehicleById;
exports.vehicles = exports.vehicleDetails = exports.uploadHistory = exports.serviceCostCatalog = exports.predictions = exports.maintenanceSchedule = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var vehicles = exports.vehicles = [{
  id: 'v1',
  make: 'Toyota',
  model: 'Corolla',
  year: 2021,
  mileage: 42000,
  healthScore: 87,
  status: 'healthy',
  lastUpdated: '2026-07-01'
}, {
  id: 'v2',
  make: 'BMW',
  model: 'X3',
  year: 2019,
  mileage: 68500,
  healthScore: 54,
  status: 'warning',
  lastUpdated: '2026-06-29'
}, {
  id: 'v3',
  make: 'Renault',
  model: 'Clio',
  year: 2022,
  mileage: 15200,
  healthScore: 95,
  status: 'healthy',
  lastUpdated: '2026-07-03'
}, {
  id: 'v4',
  make: 'Peugeot',
  model: '3008',
  year: 2018,
  mileage: 91000,
  healthScore: 31,
  status: 'critical',
  lastUpdated: '2026-06-25'
}];
var alerts = exports.alerts = [{
  id: 'a1',
  vehicleId: 'v4',
  vehicleName: 'Peugeot 3008',
  severity: 'critical',
  message: 'Code défaut détecté : pression pneu avant gauche anormale',
  date: '2026-07-04'
}, {
  id: 'a2',
  vehicleId: 'v2',
  vehicleName: 'BMW X3',
  severity: 'warning',
  message: 'Maintenance recommandée : vidange à prévoir sous 500km',
  date: '2026-07-03'
}, {
  id: 'a3',
  vehicleId: 'v1',
  vehicleName: 'Toyota Corolla',
  severity: 'info',
  message: 'Analyse capteurs terminée, aucune anomalie',
  date: '2026-07-01'
}];
function getHealthSummary() {
  var total = vehicles.length;
  var healthy = vehicles.filter(function (v) {
    return v.status === 'healthy';
  }).length;
  var warning = vehicles.filter(function (v) {
    return v.status === 'warning';
  }).length;
  var critical = vehicles.filter(function (v) {
    return v.status === 'critical';
  }).length;
  return {
    total: total,
    healthy: healthy,
    warning: warning,
    critical: critical
  };
}
var vehicleDetails = exports.vehicleDetails = {
  v1: {
    vin: '1HGCM82633A123456',
    plate: 'AB-123-CD',
    photo: null,
    componentHealth: [{
      name: 'Moteur',
      score: 92,
      risk: 'low'
    }, {
      name: 'Freins',
      score: 85,
      risk: 'low'
    }, {
      name: 'Batterie',
      score: 78,
      risk: 'medium'
    }, {
      name: 'Refroidissement',
      score: 90,
      risk: 'low'
    }],
    sensorData: [{
      date: '01/07',
      rpm: 2100,
      temp: 88,
      voltage: 12.6
    }, {
      date: '02/07',
      rpm: 2200,
      temp: 90,
      voltage: 12.5
    }, {
      date: '03/07',
      rpm: 2050,
      temp: 87,
      voltage: 12.6
    }, {
      date: '04/07',
      rpm: 2300,
      temp: 92,
      voltage: 12.4
    }, {
      date: '05/07',
      rpm: 2150,
      temp: 89,
      voltage: 12.6
    }],
    dtcs: [{
      id: 'd1',
      code: 'P0128',
      severity: 'warning',
      description: 'Thermostat de refroidissement',
      date: '2026-06-28'
    }, {
      id: 'd2',
      code: 'P0442',
      severity: 'info',
      description: 'Fuite mineure système EVAP',
      date: '2026-06-15'
    }],
    maintenanceLog: [{
      id: 'm1',
      type: 'Vidange',
      date: '2026-05-10',
      mileage: 40000,
      cost: 65
    }, {
      id: 'm2',
      type: 'Changement plaquettes',
      date: '2026-03-02',
      mileage: 37500,
      cost: 120
    }]
  },
  v2: {
    vin: '5UXWX7C50BA123789',
    plate: 'CD-456-EF',
    photo: null,
    componentHealth: [{
      name: 'Moteur',
      score: 70,
      risk: 'medium'
    }, {
      name: 'Freins',
      score: 45,
      risk: 'high'
    }, {
      name: 'Batterie',
      score: 60,
      risk: 'medium'
    }, {
      name: 'Refroidissement',
      score: 80,
      risk: 'low'
    }],
    sensorData: [{
      date: '01/07',
      rpm: 2400,
      temp: 95,
      voltage: 12.1
    }, {
      date: '02/07',
      rpm: 2500,
      temp: 97,
      voltage: 12.0
    }, {
      date: '03/07',
      rpm: 2450,
      temp: 96,
      voltage: 12.0
    }, {
      date: '04/07',
      rpm: 2600,
      temp: 99,
      voltage: 11.9
    }, {
      date: '05/07',
      rpm: 2550,
      temp: 98,
      voltage: 11.9
    }],
    dtcs: [{
      id: 'd3',
      code: 'P0300',
      severity: 'critical',
      description: 'Ratés d\'allumage multi-cylindres',
      date: '2026-07-02'
    }],
    maintenanceLog: [{
      id: 'm3',
      type: 'Vidange',
      date: '2026-04-20',
      mileage: 65000,
      cost: 90
    }]
  }
};
function getVehicleById(id) {
  var vehicle = vehicles.find(function (v) {
    return v.id === id;
  });
  var details = vehicleDetails[id];
  if (!vehicle || !details) return null;
  return _objectSpread(_objectSpread({}, vehicle), details);
}
var uploadHistory = exports.uploadHistory = {
  v1: [{
    id: 'u1',
    fileName: 'obd_juin_2026.csv',
    date: '2026-06-28',
    rowCount: 1420,
    status: 'success',
    errorDetails: null
  }, {
    id: 'u2',
    fileName: 'obd_mai_2026.csv',
    date: '2026-05-30',
    rowCount: 980,
    status: 'partial',
    errorDetails: '12 lignes ignorées'
  }],
  v2: [{
    id: 'u3',
    fileName: 'sensors_export.json',
    date: '2026-07-01',
    rowCount: 2100,
    status: 'success',
    errorDetails: null
  }]
};
function getUploadHistory(vehicleId) {
  return uploadHistory[vehicleId] || [];
}
var predictions = exports.predictions = {
  v1: {
    globalRisk: 22,
    componentRisks: [{
      name: 'Batterie',
      risk: 'medium',
      percentage: 45,
      confidence: 82
    }, {
      name: 'Freins',
      risk: 'low',
      percentage: 12,
      confidence: 91
    }, {
      name: 'Moteur',
      risk: 'low',
      percentage: 8,
      confidence: 88
    }, {
      name: 'Refroidissement',
      risk: 'low',
      percentage: 15,
      confidence: 85
    }],
    recommendations: [{
      id: 'r1',
      action: 'Faire tester la batterie en atelier',
      urgency: 'medium',
      estimatedCost: '30-50 €',
      reasoning: 'Tension en légère baisse sur les 7 derniers jours'
    }, {
      id: 'r2',
      action: 'Prochaine vidange dans 2 000 km',
      urgency: 'low',
      estimatedCost: '60-90 €',
      reasoning: 'Basé sur le kilométrage et l\'historique d\'entretien'
    }],
    forecast: [{
      date: '01/07',
      voltage: 12.6
    }, {
      date: '08/07',
      voltage: 12.5
    }, {
      date: '15/07',
      voltage: 12.3
    }, {
      date: '22/07',
      voltage: 12.1
    }, {
      date: '29/07',
      voltage: 11.9
    }]
  },
  v2: {
    globalRisk: 68,
    componentRisks: [{
      name: 'Freins',
      risk: 'high',
      percentage: 78,
      confidence: 90
    }, {
      name: 'Moteur',
      risk: 'medium',
      percentage: 52,
      confidence: 76
    }, {
      name: 'Batterie',
      risk: 'medium',
      percentage: 40,
      confidence: 80
    }, {
      name: 'Refroidissement',
      risk: 'low',
      percentage: 20,
      confidence: 84
    }],
    recommendations: [{
      id: 'r3',
      action: 'Remplacer les plaquettes de frein avant',
      urgency: 'high',
      estimatedCost: '150-220 €',
      reasoning: 'Code défaut P0300 combiné à usure détectée'
    }, {
      id: 'r4',
      action: 'Diagnostic moteur approfondi recommandé',
      urgency: 'medium',
      estimatedCost: '80-120 €',
      reasoning: 'Ratés d\'allumage multi-cylindres détectés'
    }],
    forecast: [{
      date: '01/07',
      voltage: 12.1
    }, {
      date: '08/07',
      voltage: 11.9
    }, {
      date: '15/07',
      voltage: 11.7
    }, {
      date: '22/07',
      voltage: 11.4
    }, {
      date: '29/07',
      voltage: 11.1
    }]
  }
};
function getPredictions(vehicleId) {
  return predictions[vehicleId] || null;
}
var maintenanceSchedule = exports.maintenanceSchedule = {
  v1: {
    history: [{
      id: 'm1',
      type: 'Vidange',
      date: '2026-05-10',
      mileage: 40000,
      cost: 65,
      notes: 'Huile 5W30 + filtre'
    }, {
      id: 'm2',
      type: 'Changement plaquettes',
      date: '2026-03-02',
      mileage: 37500,
      cost: 120,
      notes: 'Plaquettes avant'
    }, {
      id: 'm5',
      type: 'Révision complète',
      date: '2025-12-15',
      mileage: 32000,
      cost: 280,
      notes: 'Révision 30 000 km'
    }],
    upcoming: [{
      id: 's1',
      type: 'Vidange',
      dueDate: '2026-08-10',
      dueMileage: 45000,
      urgency: 'medium'
    }, {
      id: 's2',
      type: 'Contrôle technique',
      dueDate: '2026-09-01',
      dueMileage: null,
      urgency: 'low'
    }]
  },
  v2: {
    history: [{
      id: 'm3',
      type: 'Vidange',
      date: '2026-04-20',
      mileage: 65000,
      cost: 90,
      notes: 'Huile 0W20'
    }],
    upcoming: [{
      id: 's3',
      type: 'Changement plaquettes de frein',
      dueDate: '2026-07-15',
      dueMileage: 69000,
      urgency: 'high'
    }, {
      id: 's4',
      type: 'Vidange',
      dueDate: '2026-10-20',
      dueMileage: 73000,
      urgency: 'low'
    }]
  }
};
function getMaintenanceSchedule(vehicleId) {
  return maintenanceSchedule[vehicleId] || {
    history: [],
    upcoming: []
  };
}
var serviceCostCatalog = exports.serviceCostCatalog = {
  'Vidange': 75,
  'Changement plaquettes de frein': 150,
  'Révision complète': 280,
  'Changement de pneus': 400,
  'Contrôle technique': 80,
  'Changement de batterie': 150,
  'Remplacement courroie de distribution': 350,
  'Diagnostic électronique': 60,
  'Autre': 0
};
var allNotifications = exports.allNotifications = [{
  id: 'n1',
  vehicleId: 'v4',
  vehicleName: 'Peugeot 3008',
  severity: 'critical',
  message: 'Code défaut détecté : pression pneu avant gauche anormale',
  date: '2026-07-04',
  acknowledged: false
}, {
  id: 'n2',
  vehicleId: 'v2',
  vehicleName: 'BMW X3',
  severity: 'warning',
  message: 'Maintenance recommandée : vidange à prévoir sous 500km',
  date: '2026-07-03',
  acknowledged: false
}, {
  id: 'n3',
  vehicleId: 'v1',
  vehicleName: 'Toyota Corolla',
  severity: 'info',
  message: 'Analyse capteurs terminée, aucune anomalie',
  date: '2026-07-01',
  acknowledged: false
}, {
  id: 'n4',
  vehicleId: 'v2',
  vehicleName: 'BMW X3',
  severity: 'critical',
  message: "Ratés d'allumage multi-cylindres détectés (P0300)",
  date: '2026-07-02',
  acknowledged: false
}, {
  id: 'n5',
  vehicleId: 'v1',
  vehicleName: 'Toyota Corolla',
  severity: 'warning',
  message: 'Thermostat de refroidissement à vérifier (P0128)',
  date: '2026-06-28',
  acknowledged: true
}, {
  id: 'n6',
  vehicleId: 'v3',
  vehicleName: 'Renault Clio',
  severity: 'info',
  message: 'Nouveau véhicule ajouté avec succès',
  date: '2026-06-20',
  acknowledged: true
}];
function getAllMaintenanceHistory() {
  return Object.entries(maintenanceSchedule).flatMap(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      vehicleId = _ref2[0],
      schedule = _ref2[1];
    var vehicle = vehicles.find(function (v) {
      return v.id === vehicleId;
    });
    return schedule.history.map(function (entry) {
      return _objectSpread(_objectSpread({}, entry), {}, {
        vehicleId: vehicleId,
        vehicleName: vehicle ? "".concat(vehicle.make, " ").concat(vehicle.model) : 'Véhicule inconnu'
      });
    });
  }).sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
}
function getAllUpcomingMaintenance() {
  return Object.entries(maintenanceSchedule).flatMap(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      vehicleId = _ref4[0],
      schedule = _ref4[1];
    var vehicle = vehicles.find(function (v) {
      return v.id === vehicleId;
    });
    return schedule.upcoming.map(function (entry) {
      return _objectSpread(_objectSpread({}, entry), {}, {
        vehicleId: vehicleId,
        vehicleName: vehicle ? "".concat(vehicle.make, " ").concat(vehicle.model) : 'Véhicule inconnu'
      });
    });
  }).sort(function (a, b) {
    return new Date(a.dueDate) - new Date(b.dueDate);
  });
}
function getGlobalRiskOverview() {
  return Object.entries(predictions).map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      vehicleId = _ref6[0],
      data = _ref6[1];
    var vehicle = vehicles.find(function (v) {
      return v.id === vehicleId;
    });
    return {
      vehicleId: vehicleId,
      vehicleName: vehicle ? "".concat(vehicle.make, " ").concat(vehicle.model) : 'Véhicule inconnu',
      globalRisk: data.globalRisk
    };
  }).sort(function (a, b) {
    return b.globalRisk - a.globalRisk;
  });
}
function getAllRecommendations() {
  return Object.entries(predictions).flatMap(function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
      vehicleId = _ref8[0],
      data = _ref8[1];
    var vehicle = vehicles.find(function (v) {
      return v.id === vehicleId;
    });
    return data.recommendations.map(function (rec) {
      return _objectSpread(_objectSpread({}, rec), {}, {
        vehicleId: vehicleId,
        vehicleName: vehicle ? "".concat(vehicle.make, " ").concat(vehicle.model) : 'Véhicule inconnu'
      });
    });
  }).sort(function (a, b) {
    var order = {
      high: 0,
      medium: 1,
      low: 2
    };
    return order[a.urgency] - order[b.urgency];
  });
}