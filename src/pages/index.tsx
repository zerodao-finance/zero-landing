import { About } from '../components/templates/About';
import { Base } from '../components/templates/Base';
import { Blog } from '../components/templates/Blog';
import { Hero } from '../components/templates/Hero';
import { fetchAPI } from '../lib/strapi/api';

const HomePage = ({ articles }: any) => (
  <Base withNav>
    <Hero />
    <About />
    <Blog articles={articles} />
  </Base>
);

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes] = await Promise.all([
    fetchAPI('/articles', { populate: ['image', 'category'] }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
    },
    revalidate: 1,
  };
}

export default HomePage;
