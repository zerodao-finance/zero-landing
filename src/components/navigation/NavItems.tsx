import Link from 'next/link';

import useWindowDimensions from '../../hooks/WindowDimensions';
import { CTAButton } from '../buttons/CTA';

const NavItems = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      <li className="hover:text-gray-100 transition duration-200 !mb-0">
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
      </Link>
    </>
  );
};

export { NavItems };
