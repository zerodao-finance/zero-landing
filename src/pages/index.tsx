import { Base } from '../components/templates/Base';
import { Blog } from '../components/templates/Home/Blog';
import { Hero } from '../components/templates/Home/Hero';

const HomePage = () => (
  <Base>
    <Hero />
    <Blog />
  </Base>
);

export default HomePage;
