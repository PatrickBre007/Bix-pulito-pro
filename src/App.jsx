import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BubbleParticles from './components/BubbleParticles';
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Divani from './pages/services/Divani';
import Materassi from './pages/services/Materassi';
import Tendaggi from './pages/services/Tendaggi';
import Tappeti from './pages/services/Tappeti';
import InterniAuto from './pages/services/InterniAuto';
import Preventivo from './pages/Preventivo';
import Contatti from './pages/Contatti';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <BubbleParticles />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/servizi/divani" element={<Divani />} />
            <Route path="/servizi/materassi" element={<Materassi />} />
            <Route path="/servizi/tendaggi" element={<Tendaggi />} />
            <Route path="/servizi/tappeti" element={<Tappeti />} />
            <Route path="/servizi/interni-auto" element={<InterniAuto />} />
            <Route path="/preventivo" element={<Preventivo />} />
            <Route path="/contatti" element={<Contatti />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
