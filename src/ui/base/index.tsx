import { ReactNode, useEffect, useState } from 'react';

import useWindowDimensions from '../../hooks/window-dimensions';

// Utils
// Layouts
// Components
import { Footer } from './footer';
import { Logo } from './logo';
import { Meta } from './meta';
import { Navbar } from './navbar';

type IBaseProps = {
  children: ReactNode;
  withNav?: boolean;
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
};

const Base = (props: IBaseProps) => {
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
    <div className="antialiased text-white">
      <Meta
        title={props.meta?.title}
        description={props.meta?.description}
        image={props.meta?.image}
      />
      <>
        {props.withNav && <Navbar logo={<Logo xl={width > 900} svg />} />}
        {props.children}
        <Footer iconList />
      </>
    </div>
  );
};

export { Base };
