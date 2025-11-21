import { Base } from '../ui/base';
import { About, Blog, Demo, Hero, Team, ZeroHeroes } from '../ui/views';
import { STATIC_ARTICLES } from '../utils/static-articles';

const HomePage = () => {
  return (
    <Base navColor="bg-gray-1000">
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="demo">
        <Demo />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="heroes">
        <ZeroHeroes />
      </div>
      <div id="blog">
        <Blog articles={STATIC_ARTICLES} withShowMore />
      </div>
    </Base>
  );
};

export default HomePage;
