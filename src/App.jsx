import Navbar from "./components/Navbar";
import HeroHeader from "./components/HeroHeader";
import CashflowSummary from "./components/CashflowSummary";
import ProjectTimeline from "./components/ProjectTimeline";
import DonationBox from "./components/DonationBox";
import Footer from "./components/Footer";
import { campaignData } from "./data/campaignData";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8faf8] text-slate-900">
      <Navbar institution={campaignData.institution} />
      <main>
        <HeroHeader
          organizer={campaignData.organizer}
          institution={campaignData.institution}
          title={campaignData.title}
          lastUpdated={campaignData.lastUpdated}
        />
        <CashflowSummary
          targetRab={campaignData.targetRab}
          collectedFunds={campaignData.collectedFunds}
          usedFunds={campaignData.usedFunds}
          cashflowLogs={campaignData.cashflowLogs}
        />
        <ProjectTimeline phases={campaignData.phases} />
        <DonationBox
          account={campaignData.donationAccount}
          contact={campaignData.contactPerson}
        />
      </main>
      <Footer
        organizer={campaignData.organizer}
        institution={campaignData.institution}
      />
    </div>
  );
}