import { ReactNode } from 'react';

// Components
import { SocialIconList } from '../buttons/SocialIconList';
import { FooterCopyright } from './FooterCopyright';

// Types
type ICenteredFooterProps = {
  logo?: ReactNode;
  iconList?: boolean;
  children?: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center">
    <div className="flex justify-center">{props.logo}</div>

    {props.children && (
      <nav>
        <ul className="navbar mt-5 flex flex-row justify-center font-medium text-xl text-white uppercase">
          {props.children}
        </ul>
      </nav>
    )}

    {props.iconList && (
      <div className={`${props.children && 'mt-8'} flex justify-center`}>
        <SocialIconList />
      </div>
    )}

    <div className="mt-8 text-sm">
      <FooterCopyright />
    </div>

    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
