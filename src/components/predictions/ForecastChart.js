import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './forecastChart.css';

export default function ForecastChart({ data }) {
    return (
        <div className="forecast-chart">
            <h3 className="forecast-chart-title">Prévision — Tension batterie (30 jours)</h3>
            <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="forecastGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#818cf8" stopOpacity={0.35} />
                            <stop offset="100%" stopColor="#818cf8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                    <XAxis dataKey="date" stroke="#64748b" fontSize={11} />
                    <YAxis stroke="#64748b" fontSize={11} width={35} domain={['auto', 'auto']} />
                    <Tooltip contentStyle={{ background: '#0a101e', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8 }} />
                    <Area type="monotone" dataKey="voltage" stroke="#818cf8" strokeWidth={2} fill="url(#forecastGradient)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}