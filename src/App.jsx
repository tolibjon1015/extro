import { motion, useScroll } from "framer-motion";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar";
import Sticky from "./components/sticky/Sticky.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Home from "./pages/home/Home.jsx";
import "./style.css";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="App">
      <Main>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <Navbar />
        <Sticky />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Main>
    </div>
  );
}

export default App;
