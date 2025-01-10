import { Route, Routes } from 'react-router-dom'; 
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gallery from './pages/Gallery'; 
import About from './pages/About'; 
import Contact from './pages/Contact'; 
import Academy from './pages/Academy';
import Codemos from './pages/Codemos';

function App() {
  return (
    <div className="bg-black relative border border-black h-max w-full">
      {/* Background Images */}
      <img
        alt="bg-noise"
        className="pointer-events-none fixed inset-0 z-10 h-screen w-full object-cover"
        src="https://xield.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg-noise.5db3ded2.png&amp;w=3840&amp;q=75"
      />
      <img
        alt="bg-grid"
        className="pointer-events-none fixed inset-0 z-20 h-screen w-full object-cover"
        src="https://xield.io/_next/static/media/bg-grid-line.12099731.svg"
      />

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/codemos" element={<Codemos/>} />

        
        {/* <Route path="/features" element={<FeaturesSectionDemo />} />
        <Route path="/team" element={<CanvasRevealEffectDemo />} /> */}
      </Routes>

      {/* Footer */}
      <Footer />

      <a href="https://forms.gle/H69Bz836LUAZaAyb7" target={"_blank"}>
        <button className="button-2">
          <p className="button__text">
            <span style={{ "--index": 0 }}>A</span>
            <span style={{ "--index": 1 }}>P</span>
            <span style={{ "--index": 2 }}>P</span>
            <span style={{ "--index": 3 }}>L</span>
            <span style={{ "--index": 4 }}>Y</span>
            <span style={{ "--index": 5 }}> </span>
            <span style={{ "--index": 6 }}>F</span>
            <span style={{ "--index": 7 }}>O</span>
            <span style={{ "--index": 8 }}>R</span>
            <span style={{ "--index": 9 }}>M</span>
          </p>
          <div className="button__circle">
            <svg
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="button__icon"
              width={14}
            >
              <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
            </svg>
          </div>
        </button>
      </a>
    </div>
  );
}

export default App;
