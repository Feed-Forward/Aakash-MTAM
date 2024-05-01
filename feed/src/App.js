import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from './Feed-Components/dashboard';
import About from './Feed-Components/about/about';
import Navbar from './Feed-Components/navbar/navbar';
import Footer from './Feed-Components/footer/footer';
import Recipients from './Feed-Components/Recipients/Recipients';
import ContactUs from './Feed-Components/ContactUs/ContactUs';
import Thanks from './Feed-Components/Recipients/Thanks';
import Involved from './Feed-Components/Involved/Involved';
import Impact from './Feed-Components/Impact/Impact';
import ScrollToTop from './Feed-Components/ScrollToTop';


function App() {

  return (
    <div className="App">
        <ScrollToTop />
      <div className="layout-module--navBg--1irpR">
            <Navbar />
        </div>
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path="about" element={<About />} />
            <Route path='contact' element={<ContactUs />} />
            <Route path="recipients" element={<Recipients />} />
            <Route path="involved" element={<Involved/>} />
            <Route path="impact" element={<Impact/>} />
            <Route path="/Thanks" element={<Thanks />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
