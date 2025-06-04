import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import AppHeader from './components/header';
import AppHero from './pages/hero';
import AppAbout from './pages/about';
import AppServices from './pages/services';
import AppWorks from './pages/works';
import AppTeams from './pages/teams';
import AppContact from './pages/contact';
import AppFooter from './components/footer';

function App() {
  return (
    <Routes>
    <div className="App">
          <header id='header'>
            <AppHeader />
          </header>
          <main>
      <Routes>
        <Route path="/" element={<AppHero />} />
        <Route index element={<AppHero />} />
        <Route path="/about" element={<AppAbout />} />
        <Route path="/services" element={<AppServices />} />
        <Route path="/works" element={<AppWorks />} />
        <Route path="/teams" element={<AppTeams />} />
        <Route path="/contact" element={<AppContact />} />
      </Routes>
    </main>
          <footer id="footer">
            <AppFooter />
          </footer>
        </div>
        </Routes>
  );
}

export default App;
