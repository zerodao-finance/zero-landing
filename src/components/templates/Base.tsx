import { ReactNode } from 'react';

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
  const { eventsLoading } = useAppContext();

  return (
    <div className="antialiased text-white">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      {eventsLoading ? (
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
