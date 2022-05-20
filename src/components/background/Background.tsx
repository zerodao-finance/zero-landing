import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
  full?: boolean;
  spaceBetween?: boolean;
};

const Background = (props: IBackgroundProps) => (
  <div
    className={`
    ${props.full && 'h-screen min-h-[850px]'} 
    ${props.spaceBetween && 'flex flex-col items-between'}
    ${props.color}
  `}
  >
    {props.children}
  </div>
);

export { Background };
