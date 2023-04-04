import INewCard from '../../interfaces/INewCard';

function NewCard({
  image, section, href, description,
}: INewCard) {
  return (
    <div className="news__gridItems">
      <div className="news__imageContainer">
        <img src={image} alt={section} />
      </div>
      <div className="news__body">
        <p className="news__section">{section}</p>
        <a href={href} className="news__description">{description}</a>
      </div>
    </div>
  );
}

export default NewCard;
