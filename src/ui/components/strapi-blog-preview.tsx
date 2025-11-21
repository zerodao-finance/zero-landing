import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { truncate } from '../../utils/helpers';
import { BlogThumbnail } from './blog-thumbnail';
import { DefaultCard } from './card';

const categoryVariants: Record<
  string,
  'gradient1' | 'gradient2' | 'gradient3' | 'gradient4' | 'gradient5'
> = {
  Technology: 'gradient1',
  DeFi: 'gradient2',
  Privacy: 'gradient3',
  Bitcoin: 'gradient4',
  Markets: 'gradient5',
};

function StrapiBlogPreview({ article }: any) {
  const category = article?.attributes?.category?.data?.attributes?.name;
  const variant = categoryVariants[category] || 'gradient1';

  return (
    <Link href={`/blog/${article.attributes.slug}`}>
      <a>
        <DefaultCard className="hover:bg-black hover:cursor-pointer text-neutral-300 hover:text-white group transition duration-200 hover:shadow-none h-full">
          <div className="mb-5 rounded overflow-hidden">
            <BlogThumbnail
              title={article.attributes.title}
              category={category}
              variant={variant}
            />
          </div>
          <h3 className="font-bold text-lg mb-1">{article.attributes.title}</h3>
          {/* <span className="text-sm text-gray-100 mb-1">
              {article.formattedDate}
            </span> */}
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            disallowedElements={['h1', 'img']}
          >
            {truncate(
              article.attributes.description
                ? article.attributes.description
                : article.attributes.content
            )}
          </ReactMarkdown>
        </DefaultCard>
      </a>
    </Link>
  );
}

export { StrapiBlogPreview };
