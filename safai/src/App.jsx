import { BrowserRouter, Routes, Route } from "react-router-dom";
// import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

export default function App() {
  return (
     <>
     <div className="min-h-screen bg-white">

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} /> 
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
        <Footer />
        
      </div>
    </>
  );
}
