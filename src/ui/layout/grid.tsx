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
    ${props.verticalCenter ? 'h-full items-center' : ''} 
    ${
      props.xl || (props.left && props.right)
        ? 'md:!grid-cols-1 lg:!grid-cols-2 2xl:grid-cols-2'
        : 'xl:grid-cols-3'
    }
    ${props.cols ? props.cols : 'grid-cols-1 md:grid-cols-2'}
    grid gap-2 lg:gap-4
  `}
  >
    {props.children ? (
      props.children
    ) : (
      <>
        <div className="order-2 lg:order-1 lg:items-center lg:flex">
          {props.left}
        </div>
        <div className="order-1 lg:order-2 lg:items-center lg:flex">
          {props.right}
        </div>
      </>
    )}
  </div>
);

export { Grid };
