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
  title?: string;
  description?: string;
};

const Base = (props: IBaseProps) => {
  const { setFirstLogin } = useAppContext();

  useEffect(() => {
    setFirstLogin?.(false);
  }, []);

  return (
    <div className="antialiased text-white">
      <Meta title={props.title} description={props.description} />
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
