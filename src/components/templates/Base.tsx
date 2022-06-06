import { ReactNode, useEffect } from 'react';

import { useAppContext } from '../../store';
// Utils
import { AppConfig } from '../../utils/AppConfig';
// Layouts
import { Meta } from '../layout/Meta';
// Components
import { Footer } from './Footer';

type IBaseProps = {
  children: ReactNode;
};

const Base = (props: IBaseProps) => {
  const { setFirstLogin } = useAppContext();

  useEffect(() => {
    setFirstLogin?.(false);
  }, []);

  return (
    <div className="antialiased text-white">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      {/*  IN PROG */}
      {/* {firstLogin || !eventsLoading ? (
        <PreLoader />
      ) : ( */}
      <>
        {props.children}
        <Footer />
      </>
      {/* )} */}
    </div>
  );
};

export { Base };
