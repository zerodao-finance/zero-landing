import { ReactNode } from 'react';

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
  return (
    <div className="antialiased text-white">
      <Meta
        title={props.meta?.title}
        description={props.meta?.description}
        image={props.meta?.image}
      />
      <>
        {props.withNav && <BatmanNavbar />}
        {props.children}
        <Footer />
      </>
    </div>
  );
};

export { Base };
