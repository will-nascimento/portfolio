import TopBar from "./components/topbar/topBar";
import Intro from './components/intro/intro';
import Works from './components/works/works'
import Testimonials from './components/testimonials/testimonials'
import Portfolio from './components/portfolio/portfolio'
import './app.scss'
import { useState } from 'react';
import Menu from "./components/menu/menu";
import Contact from "./components/contact/contact";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>

  );
}

export default App;
