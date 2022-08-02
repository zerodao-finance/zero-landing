import { ReactNode, useEffect } from 'react';

import { useAppContext } from '../../store';
// Utils
// Layouts
import { Meta } from '../layout/Meta';
import { BatmanNavbar } from '../navigation/BatmanNavbar';
// Components
import { Footer } from './Footer';

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
  const { setFirstLogin } = useAppContext();

  useEffect(() => {
    setFirstLogin?.(false);
  }, []);

  return (
    <div className="antialiased text-white">
      <Meta
        title={props.meta?.title}
        description={props.meta?.description}
        image={props.meta?.image}
      />
      {/*  IN PROG */}
      {/* {firstLogin || !eventsLoading ? (
        <PreLoader />
      ) : ( */}
      <>
        {props.withNav && <BatmanNavbar />}
        {props.children}
        <Footer />
      </>
      {/* )} */}
    </div>
  );
};

export { Base };
