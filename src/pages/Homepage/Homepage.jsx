import HomeSection from "./Home/Home";
import InfoSection from "./Info/Info";
import EcosSection from "./Ecos/Ecos";
import WhySection from "./Why/Why";
import RoadmapSection from "./Roadmap/Roadmap";
import TeamSection from "./Team/Team";
import AppStyle from "../../components/App/App.module.css";

function HomePage() {

  return (
  <>
    <div className={AppStyle.body}>
      <div className={AppStyle.page}>
        <HomeSection />
      </div>
    </div>
    <InfoSection />
    <EcosSection />
    <WhySection />
    <RoadmapSection />
    <TeamSection />
  </>
  )
};

export default HomePage;
