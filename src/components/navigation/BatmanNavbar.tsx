import { useEffect, useState } from 'react';

import useWindowDimensions from '../../hooks/WindowDimensions';
import { Section } from '../layout/Section';
import { Logo } from '../templates/Logo';
import { Navbar } from './Navbar';
import { NavItems } from './NavItems';

const BatmanNavbar = () => {
  const { width } = useWindowDimensions();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    handleScroll();
    console.log('Scroll Position:', scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed w-full z-[99999] bg-gray-1000">
      <Section yPadding="py-3 md:py-4 lg:py-5" wide>
        <Navbar logo={<Logo xl={width > 900} svg />}>
          <NavItems />
        </Navbar>
      </Section>
    </div>
  );
};

export { BatmanNavbar };
