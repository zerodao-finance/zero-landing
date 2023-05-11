import { useEffect, useState } from 'react';

import { fetchAPI } from '../api/strapi';
import { Base } from '../ui/base';
import { About, Blog, Hero, ZeroHeroes } from '../ui/views';

const HomePage = ({ articles }: any) => {
  const [statefulArticles, setStatefulArticles] = useState(articles);

  useEffect(() => {
    const getArticles = async () => {
      const [articlesRes] = await Promise.all([
        fetchAPI('/articles', { populate: ['image', 'category'] }),
      ]);
      if (articlesRes?.data) setStatefulArticles(articlesRes.data);
    };
    getArticles();
  }, []);

  return (
    <Base>
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="heroes">
        <ZeroHeroes />
      </div>
      <div id="blog">
        <Blog articles={statefulArticles} withShowMore />
      </div>
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
      articles: articlesRes?.data || null,
    },
    revalidate: 3,
  };
}

export default HomePage;
