import Image from 'next/image';
import Link from 'next/link';
import { RiMediumFill } from 'react-icons/ri';

import { truncate } from '../../utils/helpers';
import { DefaultCard } from './card';

type IBlogPreviewProps = {
  title: string;
  desc: string;
  date: string;
  img: string;
  alt?: string;
  link: string;
  id?: string;
};

function MediumBlogPreview(props: IBlogPreviewProps) {
  // Parse HTML and grab first 'p' element
  let parsedDesc;

  if (typeof window !== 'undefined') {
    const html = document.createElement('html');
    html.innerHTML = props.desc;
    parsedDesc = html.children[1]?.querySelector('p')?.innerHTML;
  }

  return (
    <Link href={props.link} target="_blank" rel="noreferrer">
      <DefaultCard className="hover:bg-black hover:cursor-pointer text-neutral-300 hover:text-white group transition duration-200 hover:shadow-none h-full">
        <div className="mb-5">
          <Image
            src={props.img}
            alt={props.alt || 'zerodao'}
            className="rounded"
            height="200"
            width="350"
            objectFit="cover"
            layout="responsive"
            priority
          />
        </div>
        <div className="flex justify-between w-full items-center">
          <h3 className="font-bold text-lg mb-1">
            {truncate(props.title, 35)}
          </h3>
          <RiMediumFill size="24px" />
        </div>
        {/* <span className="text-sm text-gray-100 mb-1">{props.date}</span> */}
        <p className="text-white" suppressHydrationWarning>
          {truncate(parsedDesc)}
        </p>
      </DefaultCard>
    </Link>
  );
}

export { MediumBlogPreview };
