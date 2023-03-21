import { ReactNode } from 'react';

import Link from 'next/link';

import { AppConfig } from '../../utils/app-config';
import { hoverWhite } from '../../utils/constants';
import { SocialIconList } from '../components/social-icons';
import { Background } from '../layout/background';
import { Section } from '../layout/section';

// Types
type IFooterProps = {
  logo?: ReactNode;
  iconList?: boolean;
};

const Footer = (props: IFooterProps) => (
  <Background color="bg-brand-black">
    <Section>
      <div className="text-center">
        <div className="flex justify-center">{props.logo}</div>

        <nav>
          <ul className="navbar mt-5 flex flex-row justify-center font-medium text-xl text-white uppercase">
            <li className={hoverWhite}>
              <Link href="/roadmap">
                <a>Roadmap</a>
              </Link>
            </li>
            <li className={hoverWhite}>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className={hoverWhite}>
              <Link href="http://docs.zerodao.com" target="_blank">
                <a>Docs</a>
              </Link>
            </li>
          </ul>
        </nav>

        {props.iconList && (
          <div className={`mt-8 flex justify-center`}>
            <SocialIconList />
          </div>
        )}

        <div className="mt-8 text-sm">
          <div className="footer-copyright">
            © Copyright {new Date().getFullYear()} {AppConfig.legalName}
          </div>
        </div>

        <style jsx>
          {`
            .navbar :global(li) {
              @apply mx-4;
            }
            .footer-copyright :global(a) {
              @apply text-primary-500;
            }

            .footer-copyright :global(a:hover) {
              @apply underline;
            }
          `}
        </style>
      </div>
    </Section>
  </Background>
);

export { Footer };
