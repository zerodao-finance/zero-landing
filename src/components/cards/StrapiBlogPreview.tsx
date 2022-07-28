import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { truncate } from '../../utils/Helpers';
import { DefaultCard } from './Default';

function StrapiBlogPreview({ article }: any) {
  return (
    <Link href={`/blog/${article.attributes.slug}`}>
      <div className="transition duration-300 hover:scale-[1.025] hover:text-brand-100 cursor-pointer h-full">
        <DefaultCard minHeight="!h-full">
          <>
            <div className="mb-5">
              <Image
                src={
                  article?.attributes?.thumbnail
                    ? article?.attributes?.thumbnail
                    : '/assets/images/logos/logo-only.svg'
                }
                alt={'image-url'}
                className="rounded"
                height="200"
                width="350"
                objectFit={article?.attributes?.thumbnail ? 'cover' : 'contain'}
                layout="responsive"
                priority
              />
            </div>
            <h3 className="font-bold whitespace-nowrap overflow-hidden">
              {article.attributes.title}
            </h3>
            <span className="text-sm text-gray-100 mb-1">
              {article.formattedDate}
            </span>
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
          </>
        </DefaultCard>
      </div>
    </Link>
  );
}

export { StrapiBlogPreview };
