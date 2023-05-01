import { ReactNode } from 'react';

import Link from 'next/link';

import { SocialIconList } from '../components/social-icons';

// Types
type IHeroOneActionProps = {
  title: ReactNode | string;
  description: string | ReactNode;
  button?: ReactNode;
  center?: boolean;
  reactive?: boolean;
  link?: { text: string; href: string };
  socials?: boolean;
};

const OneActionHero = (props: IHeroOneActionProps) => {
  return (
    <header
      className={`
      ${props.center && 'text-center'}
      ${props.reactive && 'text-center lg:text-left xl:mt-20'}
      max-w-[600px]
    `}
    >
      {props?.link && (
        <Link href={props.link.href}>
          <div className="flex justify-center gap-3 pb-3 text-gray-100 cursor-pointer hover:text-brand-100 lg:max-w-fit transition duration-200">
            <span>{props.link.text}</span>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M12.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </div>
        </Link>
      )}
      <h1 className="text-3xl md:text-4xl text-white font-bold whitespace-pre-line uppercase">
        {props.title}
      </h1>

      <div className="text-lg mt-4 mb-6 2xl:mb-10">{props.description}</div>

      {props.button}

      {props.socials && (
        <div className="mt-5 2xl:mt-10 mb-10">
          <SocialIconList />
        </div>
      )}
    </header>
  );
};

export { OneActionHero };
