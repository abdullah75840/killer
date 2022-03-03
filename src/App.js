import "./App.css";
import ArtistSection from "./components/ArtistSection";
import ArtSection from "./components/ArtSection";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import InfoSection from "./components/InfoSection";
import Roadmap from "./components/Roadmap";
import StorySection from "./components/StorySection";
import TeamSection from "./components/TeamSection";

function App() {
  return (
    <div className="App" style={{ background: "linear-gradient(0deg,#ffba96 0%,#f4ab94 0%,#d7848f 74%,#c3698c)" }}>
      <img src="/images/bg.svg" alt="" style={{ position: "absolute" }} />
      <Header />
      <div className="container">
        <HomeSection />
      </div>
      <div className="container">
        <StorySection />
        <Roadmap />
        {/* <ArtSection /> */}
        {/* <Feature /> */}
        {/* <ArtistSection /> */}
        <TeamSection />
        <InfoSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
