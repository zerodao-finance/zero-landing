import { useEffect, useState } from 'react';

import { Base } from '../../components/templates/Base';
import { Blog } from '../../components/templates/Blog';
import { fetchAPI } from '../../lib/strapi/api';

const BlogList = ({ articles }: any) => {
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
    <Base withNav meta={{ title: 'zeroDAO - All Blog Posts' }}>
      <Blog articles={statefulArticles} />
    </Base>
  );
};

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

export default BlogList;
