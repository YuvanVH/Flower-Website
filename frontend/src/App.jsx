// src/App.jsx
import './styles/App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';
import FlowerFactsView from './views/FlowerFactsView';
import FlowerInfoView from './views/FlowerInfoView';
import QuizView from './views/QuizView';
import ScrollUpButton from './components/ScrollUpButton.jsx';
import MenuButton from './components/MenuButton.jsx';
import MenuContent from './components/MenuContent.jsx';
import { MenuProvider } from './components/MenuProvider.jsx';

function App() {
  return (
    <Router>
      <MenuProvider>
        <div className="appContainer">
          <div style={{ position: 'relative' }}> {/* Lägg till relativ position */}
            <a href="/"><img id="FloretteLogo" src="/src/assets/icons/FloretteLogo.png" alt="Le Florette logo" />
              <h1 id="FloretteLogoText">
                Le Florette
              </h1></a>
          </div>
          <nav className='desktopNav'> {/* Använd en klass för desktop-menyn */}
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/flowers">Flowers Facts</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <MenuButton />
          <MenuContent />
          <main>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/about" element={<AboutView />} />
              <Route path="/contact" element={<ContactView />} />
              <Route path="/flowers" element={<FlowerFactsView />} />
              <Route path="/flowers/:id" element={<FlowerInfoView />} />
              <Route path="/quiz" element={<QuizView />} />
            </Routes>
            <ScrollUpButton />
          </main>
        </div>
      </MenuProvider>
    </Router>
  );
}

export default App;
