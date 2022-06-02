import { ReactNode, useEffect, useState } from 'react';

import { useAppContext } from '../../store';
// Utils
import { AppConfig } from '../../utils/AppConfig';
// Layouts
import { Meta } from '../layout/Meta';
import { PreLoader } from '../loaders/Preloader';
// Components
import { Footer } from './Footer';

type IBaseProps = {
  children: ReactNode;
};

const Base = (props: IBaseProps) => {
  const { eventsLoading, setFirstLogin, firstLogin } = useAppContext();
  const [timed, setTimed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimed(true);
    }, 6000);

    const timer2 = setTimeout(() => {
      setFirstLogin?.(false);
    }, 10000);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="antialiased text-white">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      {firstLogin && (eventsLoading || !timed) ? (
        <PreLoader />
      ) : (
        <>
          {props.children}
          <Footer />
        </>
      )}
    </div>
  );
};

export { Base };
