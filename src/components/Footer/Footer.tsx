import './Footer.scss';
import MarvelIcon from '../../assets/marvel-icon.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__image">
          <img src={MarvelIcon} alt="marvel logo" />
        </div>
        <p className="footer__copyright">Made by Kevin😎. Applaudo Studios 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
