import { useEffect, useState } from 'react';

import { About } from '../components/templates/About';
import { Base } from '../components/templates/Base';
import { Blog } from '../components/templates/Blog';
import { Hero } from '../components/templates/Hero';
import { fetchAPI } from '../lib/strapi/api';

const HomePage = ({ articles }: any) => {
  const [statefulArticles, setStatefulArticles] = useState(articles);

  useEffect(() => {
    const getArticles = async () => {
      const [articlesRes] = await Promise.all([
        fetchAPI('/articles', { populate: ['image', 'category'] }),
      ]);
      setStatefulArticles(articlesRes.data);
    };
    getArticles();
  }, []);

  return (
    <Base withNav>
      <Hero />
      <About />
      <Blog articles={statefulArticles} withShowMore />
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
    revalidate: 3,
  };
}

export default HomePage;
