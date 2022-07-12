import Image from 'next/image';

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
  const html = document.createElement('html');
  html.innerHTML = props.desc;
  const parsedDesc = html.children[1]?.querySelector('p')?.innerHTML;

  // TODO: Make as many skeleton loading cards as blog posts --> 2 atm

  return (
    <a href={props.link} target="_blank" rel="noreferrer">
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
    </a>
  );
}

export { BlogPreview };
