import { Base } from '../../components/templates/Base';
import { Blog } from '../../components/templates/Blog';
import { fetchAPI } from '../../lib/strapi/api';

const BlogList = ({ articles }: any) => {
  return (
    <Base withNav meta={{ title: 'zeroDAO - All Blog Posts' }}>
      <Blog articles={articles} />
    </Base>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI('/articles', { populate: ['image', 'category'] }),
    fetchAPI('/categories', { populate: '*' }),
    fetchAPI('/homepage', {
      populate: {
        hero: '*',
        seo: { populate: '*' },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default BlogList;
