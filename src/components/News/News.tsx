import NEWS_ITEMS from '../../constants/news';
import NewsCard from './NewsCard';

function News() {
  return (
    <section className="news">
      <div className="news__container">
        <h1>Lastest Marvel News</h1>
        <div className="news__grid">
          {NEWS_ITEMS.map(({
            id, section, image, href, description,
          }) => (
            <NewsCard
              key={id}
              section={section}
              image={image}
              href={href}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
