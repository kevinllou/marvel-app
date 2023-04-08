import { Link } from 'react-router-dom';
import ROUTES from '../../routes/routes';
import './Error404.scss';

function Error404() {
  return (
    <section className="error404">
      <div className="error404__number">
        <p>404</p>
      </div>
      <div className="error404__message">
        <h1>WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND</h1>
      </div>
      <div className="error404__button">
        <button type="button"><Link to={ROUTES.HOME}>Go home</Link></button>
      </div>
    </section>
  );
}

export default Error404;
