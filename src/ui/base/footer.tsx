import { ReactNode } from 'react';

import Link from 'next/link';

import { Button, Copyright } from '../components';
import { SocialIconList } from '../components/social-icons';
import { Background } from '../layout/background';
import { Section } from '../layout/section';

// Types
type IFooterProps = {
  logo?: ReactNode;
  iconList?: boolean;
};

const links = [
  {
    text: 'Blog',
    href: '/blog',
    target: '_self',
  },
  {
    text: 'Roadmap',
    href: '/roadmap',
    target: '_self',
  },
  {
    text: 'Docs',
    href: 'http://docs.zerodao.com',
    target: '_blank',
  },
];

const Footer = (props: IFooterProps) => (
  <Background color="bg-brand-black">
    <Section yPadding="py-4 lg:py-6">
      <div className="text-center flex flex-col gap-6">
        {props.logo && <div className="flex justify-center">{props.logo}</div>}

        <nav>
          <ul className="navbar grid grid-cols-3 justify-center text-center text-sm sm:text-md 2xl:text-lg">
            {links.map((link, i) => (
              <li key={`link-${i}`}>
                <Link href={link.href} target={link.target}>
                  <a>
                    <Button type="link">{link.text}</Button>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {props.iconList && (
          <div className={`flex justify-center`}>
            <SocialIconList />
          </div>
        )}

        <div className="text-xs sm:text-sm">
          <div className="footer-copyright">
            <Copyright />
          </div>
        </div>
      </div>
    </Section>
  </Background>
);

export { Footer };
