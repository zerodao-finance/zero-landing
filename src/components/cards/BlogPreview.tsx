import Image from 'next/image';
import Link from 'next/link';

import { truncate } from '../../utils/Helpers';
import { DefaultCard } from './Default';

type IBlogPreviewProps = {
  title: string;
  desc: string;
  date: string;
  img: string;
  alt?: string;
  link: string;
};

function BlogPreview(props: IBlogPreviewProps) {
  // Parse HTML and grab first 'p' element
  let parsedDesc;

  if (typeof window !== 'undefined') {
    const html = document.createElement('html');
    html.innerHTML = props.desc;
    parsedDesc = html.children[1]?.querySelector('p')?.innerHTML;
  }

  return (
    <Link href={props.link} target="_blank" rel="noreferrer">
      <div className="transition duration-300 hover:scale-[1.025] hover:text-brand-100">
        <DefaultCard>
          <div className="mb-5">
            <Image
              src={props.img}
              alt={props.alt}
              className="rounded"
              height="200"
              width="350"
              objectFit="cover"
              loading="lazy"
              layout="responsive"
            />
          </div>
          <h3 className="font-bold whitespace-nowrap overflow-hidden">
            {props.title}
          </h3>
          <span className="text-sm text-gray-100">{props.date}</span>
          <p className="text-white">{truncate(parsedDesc)}</p>
        </DefaultCard>
      </div>
    </Link>
  );
}

export { BlogPreview };
