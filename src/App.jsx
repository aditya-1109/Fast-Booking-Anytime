import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import ThrillophiliaClone from './webb';
import ThingsToDoInDubai from './activity';
import DubaiTourCard from './pages';
import HeroSection from './about';
import Header from './components/ui/header';
import Footer from "./footer";
import Careers from './hire';


const Layout = () => {
  return (
    <div className="bg-white overflow-x-hidden" style={{width: "100vw"}}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ThrillophiliaClone />} />
          <Route path="/About Us" element={<HeroSection />} />
          <Route path="/country/:countryName" element={<ThrillophiliaClone />} />
          <Route path="/view/:country" element={<ThingsToDoInDubai />} />
          <Route path='/pic/:tittle/:country' element={<DubaiTourCard />} />
          <Route path='/We Are Hiring' element={<Careers />} />
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
