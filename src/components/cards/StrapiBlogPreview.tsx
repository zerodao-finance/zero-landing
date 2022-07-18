import Link from 'next/link';

import { DefaultCard } from './Default';

function StrapiBlogPreview({ article }: any) {
  return (
    <Link href={`/blog/${article.attributes.slug}`}>
      <div className="transition duration-300 hover:scale-[1.025] hover:text-brand-100 cursor-pointer">
        <DefaultCard>
          {/* <div className="mb-5">
            <Image
              src={props.img}
              alt={props.alt}
              className="rounded"
              height="200"
              width="350"
              objectFit="cover"
              layout="responsive"
              priority
            />
          </div>
          <h3 className="font-bold whitespace-nowrap overflow-hidden">
            {props.title}
          </h3>
          <span className="text-sm text-gray-100">{props.date}</span>
          <p className="text-white" suppressHydrationWarning>{truncate(parsedDesc)}</p> */}
        </DefaultCard>
      </div>
    </Link>
  );
}

export { StrapiBlogPreview };
