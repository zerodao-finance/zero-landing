import { useEffect, useState } from 'react';

import { fetchAPI } from '../../api/strapi';
import { Base } from '../../ui/base';
import { Blog } from '../../ui/views/blog';

const BlogList = ({ articles }: any) => {
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
    <Base meta={{ title: 'ZERO | Blog Posts' }}>
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
      articles: articlesRes?.data || null,
    },
    revalidate: 1,
  };
}

export default BlogList;
