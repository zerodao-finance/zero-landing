import { ReactNode } from 'react';

// Utils
import { AppConfig } from '../../utils/AppConfig';
// Layouts
import { Meta } from '../layout/Meta';
// Components
import { Footer } from './Footer';

type IBaseProps = {
  children: ReactNode;
};

const Base = (props: IBaseProps) => (
  <div className="antialiased text-white">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    {props.children}
    <Footer />
  </div>
);

export { Base };
