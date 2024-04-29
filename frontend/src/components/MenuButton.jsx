// src/components/MenuButton.jsx
import { useMenu } from '../components/MenuProvider.jsx';
import '../styles/MenuButton.css';

function MenuButton() {
  const { toggleMenu, isMenuOpen } = useMenu();

  return (
    <button className="menuButton" onClick={toggleMenu}>
      {/* Använd olika ikonbilder beroende på menyns tillstånd */}
      {isMenuOpen ? (
        <img src="/src/assets/icons/icons8-menu-128.png" alt="Open Menu" />
      ) : (
        <img src="/src/assets/icons/icons8-close-192.png" alt="Close Menu" />
      )}
    </button>
  );
}

export default MenuButton;
