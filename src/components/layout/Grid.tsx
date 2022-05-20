import { ReactNode } from 'react';

type ISectionProps = {
  left: ReactNode;
  right: ReactNode;
  verticalCenter?: boolean;
};

const Grid = (props: ISectionProps) => (
  <div
    className={`
    ${props.verticalCenter && 'h-full items-center'} 
    grid grid-cols-1 re 2xl:grid-cols-2 gap-5 md:gap-10
  `}
  >
    <div className="order-2 2xl:order-1 2xl:items-center 2xl:flex">
      {props.left}
    </div>
    <div className="order-1 2xl:order-2 2xl:items-center 2xl:flex">
      {props.right}
    </div>
  </div>
);

export { Grid };
