import { ReactNode } from 'react';

import Link from 'next/link';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <div className="flex flex-wrap justify-between items-center w-full">
    <div>
      <Link href="/">
        <a>{props.logo}</a>
      </Link>
    </div>

    <nav>
      <ul className="navbar flex items-center font-medium text-xl text-white">
        {props.children}
      </ul>
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

export { Navbar };
