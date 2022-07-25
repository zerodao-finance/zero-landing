import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { getStrapiMedia } from '../../lib/strapi/media';
import { truncate } from '../../utils/Helpers';
import { DefaultCard } from './Default';

function StrapiBlogPreview({ article }: any) {
  const imageUrl = getStrapiMedia(article.attributes.image);

  return (
    <Link href={`/blog/${article.attributes.slug}`}>
      <div className="transition duration-300 hover:scale-[1.025] hover:text-brand-100 cursor-pointer">
        <DefaultCard>
          <>
            <div className="mb-5">
              <Image
                src={imageUrl}
                alt={'image-url'}
                className="rounded"
                height="200"
                width="350"
                objectFit="cover"
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
            {console.log(article.attributes)}
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
