/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import MarvelIcon from '../../assets/marvel-icon.png';
import ROUTES from '../../routes/routes';

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <section className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={MarvelIcon} alt="marvel logo" className="header__bgImage" />
        </div>
        <nav className={isOpen ? 'header__navigation--active' : 'header__navigation'}>
          <ul className="header__navList">
            <li className="header__navItems">
              <NavLink
                to={ROUTES.HOME}
                className={({ isActive }) => (isActive ? 'header__activeLink' : '')}
              >
                Home
              </NavLink>

            </li>
            <li className="header__navItems">
              <NavLink
                to={ROUTES.CHARACTERS}
                className={({ isActive }) => (isActive ? 'header__activeLink' : '')}
              >
                Characters
              </NavLink>

            </li>
            <li className="header__navItems">
              <NavLink
                to={ROUTES.COMICS}
                className={({ isActive }) => (isActive ? 'header__activeLink' : '')}
              >
                Comics
              </NavLink>

            </li>
            <li className="header__navItems">
              <NavLink
                to={ROUTES.STORIES}
                className={({ isActive }) => (isActive ? 'header__activeLink' : '')}
              >
                Stories
              </NavLink>

            </li>
            <li className="header__navItems">
              <NavLink
                to={ROUTES.BOOKMARKS}
                className={({ isActive }) => (isActive ? 'header__activeLink' : '')}
              >
                Bookmarks
              </NavLink>

            </li>
          </ul>
        </nav>
        <div className="header__menuIcon" onClick={toggleMenu} role="menu" tabIndex={0}><i className="fa-solid fa-bars" /></div>
      </div>
    </section>
  );
}

export default Header;
