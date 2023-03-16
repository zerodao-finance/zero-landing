import { useEffect, useState } from 'react';

import { fetchAPI } from '../api/strapi/api';
import { Base } from '../ui/base';
import { About } from '../ui/views/about';
import { Blog } from '../ui/views/blog';
import { Hero } from '../ui/views/hero';

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
