import HomePage from "../../pages/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import PrivacyPolicy from "../../pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "../../pages/Terms&Conditions/TermsAndConditions";
import WhitePaper from "../../pages/WhitePaper/WhitePaper";
import Introduction from "../../pages/WhitePaper/Introduction";
import Values from "../../pages/WhitePaper/Values";
import Principals from "../../pages/WhitePaper/Principals";
import BusinessModel from "../../pages/WhitePaper/BusinessModel";
import HowItWorks from "../../pages/WhitePaper/HowItWorks";
import Roadmap from "../../pages/WhitePaper/Roadmap";
import Team from "../../pages/WhitePaper/Team";
import Conclusion from "../../pages/WhitePaper/Conclusion";
import DApp from "../../pages/DApp/DApp";
import NotFound from "../../pages/NotFound/NotFound";
import Gen1NFT from "../../pages/Gen1NFT/Gen1NFT";

function AppContent() {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

                <Route path="/white-paper" element={<WhitePaper />} />
                <Route path="/white-paper/introduction" element={<Introduction />} />
                <Route path="/white-paper/values" element={<Values />} />
                <Route path="/white-paper/principals" element={<Principals />} />
                <Route path="/white-paper/business-model" element={<BusinessModel />} />
                <Route path="/white-paper/how-it-works" element={<HowItWorks />} />
                <Route path="/white-paper/roadmap" element={<Roadmap />} />
                <Route path="/white-paper/team" element={<Team />} />
                <Route path="/white-paper/conclusion" element={<Conclusion />} />

                <Route path="/DApp" element={<DApp />} />

                <Route path="/Gen1NFT" element={<Gen1NFT />} />

                <Route path="/*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default AppContent;