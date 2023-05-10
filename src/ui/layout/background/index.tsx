import { ReactNode } from 'react';

import { AnimateBeam } from './animate-beam';
import { AnimateWaves } from './animate-waves';

type IBackgroundProps = {
  children: ReactNode;
  color?: string;
  full?: boolean;
  spaceBetween?: boolean;
  animation?: 'beam' | 'waves' | null;
  className?: string;
};

const Background = (props: IBackgroundProps) => (
  <div
    className={`
      ${props.full && 'h-screen'} 
      ${props.spaceBetween && 'flex flex-col items-between'}
      ${props.color ? props.color : 'bg-gray-1000'}
      ${props.animation && 'z-[99] relative block overflow-hidden'}
      ${props.className && props.className}
    `}
  >
    {props.animation && (
      <div className={`absolute -z-10`} id="bg-animation">
        {props.animation === 'beam' && <AnimateBeam />}
        {props.animation === 'waves' && <AnimateWaves />}
      </div>
    )}

    {props.children}
  </div>
);

export { Background };
