import { ReactNode } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { useWindowDimensions } from '../../hooks/window-dimensions';
import { Dropdown } from '../components';
import { Section } from '../layout/section';

type INavbarProps = {
  logo: ReactNode;
};

const Navbar = (props: INavbarProps) => {
  const { width } = useWindowDimensions();
  const router = useRouter();

  const navItems: { text: string; link: string; target?: string }[] = [
    { text: 'Home', link: '/' },
    { text: 'Roadmap', link: '/roadmap' },
    { text: 'Blog', link: '/blog' },
    { text: 'Docs', link: 'https://docs.zerodao.com', target: '_blank' },
  ];

  const redirect = (el: string) => {
    switch (el.toLowerCase()) {
      case 'home':
        return router.push('/');
      case 'develop':
        return router.push('/develop');
      case 'docs':
        return window.open('https://docs.zerodao.com');
      case 'blog':
        return router.push('/blog');
      case 'analytics':
        return router.push('/analytics');
      case 'launch bridge':
        return window.open('https://bridge.zerodao.com');
      case 'roadmap':
        return router.push('/roadmap');
      default:
        return router.push('/');
    }
  };

  return (
    <div className="fixed w-full z-[99999] bg-gray-1000">
      <Section yPadding="py-3 md:py-4 lg:py-5" wide>
        <div className="flex flex-wrap justify-between items-center w-full">
          <div>
            <Link href="/">
              <a>{props.logo}</a>
            </Link>
          </div>

          <nav>
            {width < 600 ? (
              <Dropdown
                items={navItems.map((el) => el.text)}
                action={redirect}
              />
            ) : (
              <ul className="navbar flex items-center font-medium text-lg text-white uppercase">
                {navItems.map((el, i) => (
                  <li
                    className="hover:text-neutral-300 transition duration-150"
                    key={`nav-item-${i}`}
                  >
                    <Link href={el.link} target={el.target}>
                      <a>{el.text}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </nav>

          <style jsx>
            {`
              .navbar :global(li:not(:first-child)) {
                @apply mt-0;
              }

              .navbar :global(li:not(:last-child)) {
                @apply mr-4;
              }

              @media only screen and (min-width: 900px) {
                .navbar :global(li:not(:last-child)) {
                  @apply mr-8;
                }
              }
            `}
          </style>
        </div>
      </Section>
    </div>
  );
};

export { Navbar };
