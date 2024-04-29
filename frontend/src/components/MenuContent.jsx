// src/components/MenuContent.jsx
import { Link } from 'react-router-dom';
import { useMenu } from '../components/MenuProvider.jsx';
import '../styles/MenuContent.css';

function MenuContent() {
  const { isMenuOpen } = useMenu();

  return (
    <nav className={isMenuOpen ? 'appNav menu' : 'appNav'}> {/* Uppdaterad klassnamn */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/flowers">Flowers</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuContent;
