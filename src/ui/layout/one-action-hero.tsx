import { ReactNode } from 'react';

import Link from 'next/link';
import { MdArrowForward } from 'react-icons/md';

import { Button } from '../components';
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
          <Button type="link">
            <span className="flex items-center text-sm">
              <span>{props.link.text}</span>
              <MdArrowForward size="20px" />
            </span>
          </Button>
        </Link>
      )}
      <h1 className="text-3xl lg:text-4xl text-white font-bold whitespace-pre-line uppercase">
        {props.title}
      </h1>

      <div className="2xl:text-lg mt-4 mb-3">{props.description}</div>

      {props.button}

      {props.socials && (
        <div className="mt-5 mb-10">
          <SocialIconList />
        </div>
      )}
    </header>
  );
};

export { OneActionHero };
