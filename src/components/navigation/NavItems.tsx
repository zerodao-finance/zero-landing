import Link from 'next/link';

import useWindowDimensions from '../../hooks/WindowDimensions';
import { CTAButton } from '../buttons/CTA';

const NavItems = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      {width > 600 && (
        <li className="hover:text-gray-100 transition duration-200">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      )}
      <li className="hover:text-gray-100 transition duration-200">
        <Link href="https://docs.zerodao.com" target="_blank">
          <a>Docs</a>
        </Link>
      </li>
      <li className="hover:text-gray-100 transition duration-200">
        <Link href="https://zerodao.com/analytics">
          <a>Analytics</a>
        </Link>
      </li>
      <Link href="https://bridge.zerodao.com">
        <a>
          <CTAButton text="Bridge" sm={width < 600} />
        </a>
      </Link>
    </>
  );
};

export { NavItems };
