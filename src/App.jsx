import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import ThingsToDoInDubai from './activity';
import DubaiTourCard from './pages';
import HeroSection from './about';
import Header from './components/ui/header';
import Footer from "./footer";
import Careers from './hire';
import MenuBar from './components/ui/menu';


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
          <Route index element={<MenuBar />} />
          <Route path="/About Us" element={<HeroSection />} />
          <Route path="/view/:country" element={<ThingsToDoInDubai />} />
          <Route path='/pic/:tittle/:country' element={<DubaiTourCard />} />
          <Route path='/We Are Hiring' element={<Careers />} />
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
