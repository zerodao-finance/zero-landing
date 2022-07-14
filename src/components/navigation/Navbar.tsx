import { ReactNode } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import useWindowDimensions from '../../hooks/WindowDimensions';
import Dropdown from '../buttons/Dropdown';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => {
  const { width } = useWindowDimensions();
  const router = useRouter();

  const redirect = (el: string) => {
    switch (el.toLowerCase()) {
      case 'home':
        return router.push('/');
      case 'docs':
        return window.open('https://docs.zerodao.com');
      case 'analytics':
        return router.push('/analytics');
      case 'launch bridge':
        return window.open('https://bridge.zerodao.com');
      default:
        return router.push('/');
    }
  };

  return (
    <div className="flex flex-wrap justify-between items-center w-full">
      <div>
        <Link href="/">
          <a>{props.logo}</a>
        </Link>
      </div>

      <nav>
        {width < 600 ? (
          <Dropdown
            items={['Home', 'Docs', 'Analytics', 'Launch Bridge']}
            action={redirect}
          />
        ) : (
          <ul className="navbar flex items-center font-medium text-lg text-white uppercase">
            {props.children}
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
  );
};

export { Navbar };
