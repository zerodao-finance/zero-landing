import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { truncate } from '../../utils/helpers';
import { DefaultCard } from './card';

function StrapiBlogPreview({ article }: any) {
  return (
    <Link href={`/blog/${article.attributes.slug}`}>
      <a>
        <DefaultCard className="hover:bg-black hover:cursor-pointer hover:text-brand-900 group transition duration-200 hover:shadow-none">
          <div className="mb-5">
            <Image
              src={
                article?.attributes?.thumbnail
                  ? article?.attributes?.thumbnail
                  : '/assets/images/logos/logo-only.svg'
              }
              alt={
                article?.attributes?.slug
                  ? article?.attributes?.slug
                  : 'zeroDAO'
              }
              className="rounded transition duration-200"
              height="200"
              width="350"
              objectFit={article?.attributes?.thumbnail ? 'cover' : 'contain'}
              layout="responsive"
              priority
            />
          </div>
          <h3 className="font-bold text-lg mb-1">{article.attributes.title}</h3>
          {/* <span className="text-sm text-gray-100 mb-1">
              {article.formattedDate}
            </span> */}
          <ReactMarkdown
            className="text-white"
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
