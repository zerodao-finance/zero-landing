import { About } from '../components/templates/About';
import { Base } from '../components/templates/Base';
import { Blog } from '../components/templates/Blog';
import { Hero } from '../components/templates/Hero';

const HomePage = () => (
  <Base withNav>
    <Hero />
    <About />
    <Blog />
  </Base>
);

export default HomePage;
