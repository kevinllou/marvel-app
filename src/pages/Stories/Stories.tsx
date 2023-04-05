import StoryFilter from '../../components/Story/StoryFilter';
import StoriesGrid from '../../components/Story/StoryGrid';
import './Stories.scss';

function Stories() {
  return (
    <section className="stories">
      <div className="stories__container">
        <h1>STORIES</h1>
        <StoryFilter />
        <StoriesGrid />
      </div>
    </section>
  );
}

export default Stories;
