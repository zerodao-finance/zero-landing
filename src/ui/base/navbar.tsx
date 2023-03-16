import { ReactNode } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import useWindowDimensions from '../../hooks/window-dimensions';
import { CTAButton } from '../buttons/CTA';
import Dropdown from '../buttons/Dropdown';
import { Section } from '../layout/Section';

type INavbarProps = {
  logo: ReactNode;
};

const Navbar = (props: INavbarProps) => {
  const { width } = useWindowDimensions();
  const router = useRouter();

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
                items={[
                  'Home',
                  // 'Develop',
                  // 'Docs',
                  // 'Analytics',
                  'Blog',
                  // 'Launch Bridge',
                  'Docs',
                ]}
                action={redirect}
              />
            ) : (
              <ul className="navbar flex items-center font-medium text-lg text-white uppercase">
                <>
                  {/* <li className="hover:text-gray-100 transition duration-200 !mb-0">
        <Link href="/develop">
          <a id="nav-item">Develop</a>
        </Link>
      </li> */}
                  <li className="hover:text-gray-100 transition duration-200 !mb-0">
                    <Link href="/blog">
                      <a id="nav-item">Blog</a>
                    </Link>
                  </li>
                  <Link href="https://docs.zerodao.com" target="_blank">
                    <a>
                      <CTAButton text="Docs" sm={width < 600} />
                    </a>
                  </Link>
                  {/* <li className="hover:text-gray-100 transition duration-200 !mb-0">
        <Link href="/develop">
          <a id="nav-item">Develop</a>
        </Link>
      </li>
      <li className="hover:text-gray-100 transition duration-200 !mb-0">
        <Link href="https://docs.zerodao.com" target="_blank">
          <a id="nav-item">Docs</a>
        </Link>
      </li>
      <li className="hover:text-gray-100 transition duration-200 !mb-0">
        <Link href="/blog">
          <a id="nav-item">Blog</a>
        </Link>
      </li>
      <li className="hover:text-gray-100 transition duration-200 !mb-0">
        <Link href="/analytics">
          <a id="nav-item">Analytics</a>
        </Link>
      </li>
      <Link href="https://bridge.zerodao.com" target="_blank">
        <a>
          <CTAButton text="Bridge" sm={width < 600} />
        </a>
      </Link> */}
                </>
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
