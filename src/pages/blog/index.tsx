import { Base } from '../../ui/base';
import { Blog } from '../../ui/views/blog';
import { STATIC_ARTICLES } from '../../utils/static-articles';

const BlogList = () => {
  return (
    <Base meta={{ title: 'ZERO | Blog Posts' }}>
      <Blog articles={STATIC_ARTICLES} />
    </Base>
  );
};

export default BlogList;
