import TopBar from "./components/topbar/topBar";
import Intro from './components/intro/intro';
import Works from './components/works/works'
import Testimonials from './components/testimonials/testimonials'
import Portfolio from './components/portfolio/portfolio'
import './app.scss'
import { useState } from 'react';

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Works />
        <Testimonials />
        <Portfolio />
      </div>
    </div>

  );
}

export default App;
