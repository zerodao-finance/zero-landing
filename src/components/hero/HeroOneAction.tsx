import { ReactNode } from 'react';
import Link from 'next/link';

// Components
import { FooterIconList } from '../footer/FooterIconList';

// Types
type IHeroOneActionProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
  center?: boolean;
  reactive?: boolean;
  link?: { text: string; href: string };
  socials?: boolean;
};

const HeroOneAction = (props: IHeroOneActionProps) => (
  <header
    className={`
    ${props.center && 'text-center'}
    ${props.reactive && 'text-center 2xl:text-left'}
    max-w-[600px]
  `}
  >
    {props?.link && (
      <Link href={props.link.href}>
        <div className="flex justify-center gap-3 pb-2 text-gray-100 cursor-pointer hover:text-brand-100 2xl:max-w-fit">
          <span>{props.link.text}</span>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
          </svg>
        </div>
      </Link>
    )}
    <h1 className="text-3xl text-white font-bold whitespace-pre-line">
      {props.title}
    </h1>
    <div className="text-xl mt-4 mb-10">{props.description}</div>

    {props.button}

    {props.socials && (
      <div className="absolute left-[1rem] md:left-[2rem] top-[40%] 2xl:left-0 2xl:top-0 2xl:mt-10 2xl:relative">
        <FooterIconList reactive />
      </div>
    )}
  </header>
);

export { HeroOneAction };
