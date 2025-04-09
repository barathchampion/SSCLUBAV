import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Gallery from "./components/gallery";
// import Facility from "./components/facility";
import PlayerDetails from "./components/playerdetails";
import LocationPage from "./components/location";
import Events from "./components/events";
import SponsorsAndPrizes from "./components/sponsorsAndPrizes";
import MembersList from "./components/membersList";
import Club from "./components/club";

const App = () => {
  return (
    <div className="App">
      <Router>
        <header>
          <Header />
        </header>

        <main >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* <Route path="/facility" element={<Facility />} /> */}
            <Route path="/events" element={<Events />} />
            <Route path="/sponsers" element={<SponsorsAndPrizes />} />
            <Route path="/members" element={<MembersList />} />       
            <Route path="/club" element={<Club />} />       
            <Route path="/locationPage" element={<LocationPage />} />
            <Route path="/player/:id" element={<PlayerDetails />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
};

export default App;
