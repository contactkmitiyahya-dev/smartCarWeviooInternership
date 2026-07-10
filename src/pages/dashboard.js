import Navbar from "../components/navbar.js";
import Hero from '../components/landing/hero.js';
import FeatureGrid from "../components/landing/FeatureGrid.js";
import HowItWorks from "../components/landing/HowItWorks.js";
import StatsBanner from "../components/landing/StatsBanner.js";
import CTASection from "../components/landing/CTASection.js";
import Footer from "../components/landing/Footer.js";


export default function Dashboard() {
  return (
    <div>
        <Hero />
        <FeatureGrid/>
        <HowItWorks />
        <StatsBanner/>  
        <CTASection />
    </div>
  );
}