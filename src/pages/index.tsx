import { Base } from '../components/templates/Base';
import { About } from '../components/templates/Home/About';
import { Blog } from '../components/templates/Home/Blog';
import { Hero } from '../components/templates/Home/Hero';

const HomePage = () => (
  <Base>
    <Hero />
    <About />
    <Blog />
  </Base>
);

export default HomePage;
