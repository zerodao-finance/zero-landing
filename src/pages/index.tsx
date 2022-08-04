import { About } from '../components/templates/About';
import { Base } from '../components/templates/Base';
import { Blog } from '../components/templates/Blog';
import { Hero } from '../components/templates/Hero';
import { fetchAPI } from '../lib/strapi/api';

const HomePage = ({ articles }: any) => {
  return (
    <Base withNav>
      <Hero />
      <About />
      <Blog articles={articles} />
    </Base>
  );
};

export async function getStaticProps() {
  // Strapi Articles - START
  const [articlesRes] = await Promise.all([
    fetchAPI('/articles', { populate: ['image', 'category'] }),
  ]);
  // Strapi Articles - END

  return {
    props: {
      articles: articlesRes.data,
    },
    revalidate: 1,
  };
}

export default HomePage;
