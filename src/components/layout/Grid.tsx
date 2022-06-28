import { ReactNode } from 'react';

type ISectionProps = {
  left?: ReactNode;
  right?: ReactNode;
  verticalCenter?: boolean;
  xl?: boolean;
  cols?: string;
  children?: ReactNode;
  style?: string;
};

const Grid = (props: ISectionProps) => (
  <div
    className={`
    ${props.style}
    ${props.verticalCenter && 'h-full items-center'} 
    ${props.xl && 'md:!grid-cols-1 xl:!grid-cols-1 2xl:!grid-cols-2'}
    ${props.cols ? props.cols : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'}
    grid gap-5 md:gap-10 py-10
  `}
  >
    {props.children ? (
      props.children
    ) : (
      <>
        <div className="order-2 2xl:order-1 2xl:items-center 2xl:flex">
          {props.left}
        </div>
        <div className="order-1 2xl:order-2 2xl:items-center 2xl:flex">
          {props.right}
        </div>
      </>
    )}
  </div>
);

export { Grid };
