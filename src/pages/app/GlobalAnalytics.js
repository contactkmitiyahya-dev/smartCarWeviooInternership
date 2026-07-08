import { getGlobalRiskOverview, getAllRecommendations } from '../../data/testData.js';
import RiskOverviewList from '../../components/analytics/RiskOverviewList';
import RecommendationList from '../../components/predictions/RecommendationList';
import './analyticsPage.css';

export default function GlobalAnalytics() {
    const overview = getGlobalRiskOverview();
    const recommendations = getAllRecommendations();

    return (
        <main className="analytics-page">
            <div className="analytics-header">
                <h1 className="analytics-title">Analytics</h1>
                <p className="analytics-subtitle">Vue d'ensemble des prédictions pour tous vos véhicules</p>
            </div>

            <RiskOverviewList overview={overview} />
            <RecommendationList recommendations={recommendations} />
        </main>
    );
}