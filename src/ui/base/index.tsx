import { ReactNode } from 'react';

import { Transition } from '@headlessui/react';

import { useWindowDimensions } from '../../hooks/window-dimensions';
import { Footer } from './footer';
import { Logo } from './logo';
import { Meta } from './meta';
import { Navbar } from './navbar';

type IBaseProps = {
  children: ReactNode;
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
};

const Base = (props: IBaseProps) => {
  const { width, scrollY } = useWindowDimensions();

  return (
    <div className="antialiased text-white">
      <Meta
        title={props.meta?.title}
        description={props.meta?.description}
        image={props.meta?.image}
      />
      {/* Static Nav */}
      <Navbar logo={<Logo xl svg />} />
      {/* Batman Nav */}
      <Transition
        show={scrollY > 500}
        enter="transform transition ease-in-out duration-500"
        enterFrom="-translate-y-48"
        enterTo="translate-y-0"
        leave="transform transition ease-in-out duration-500"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-48"
        className="fixed z-[999] w-full top-0"
      >
        <Navbar logo={<Logo xl={width > 900} svg />} />
      </Transition>

      <main>{props.children}</main>

      <Footer iconList />
    </div>
  );
};

export { Base };
