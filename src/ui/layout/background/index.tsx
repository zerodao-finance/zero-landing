import { ReactNode } from 'react';

import { AnimateBeam } from './animate-beam';
import { AnimateWaves } from './animate-waves';

type IBackgroundProps = {
  children: ReactNode;
  color?: string;
  full?: boolean;
  spaceBetween?: boolean;
  animation?: 'beam' | 'waves' | null;
  style?: string;
};

const Background = (props: IBackgroundProps) => (
  <div
    className={`
      ${props.full && 'h-screen'} 
      ${props.spaceBetween && 'flex flex-col items-between'}
      ${props.color ? props.color : 'bg-gray-1000'}
      ${props.animation && 'z-[99] relative block overflow-hidden'}
      ${props.style && props.style}
    `}
  >
    {props.animation && (
      <div className="absolute z-[-1]" id="bg-animation">
        {props.animation === 'beam' && <AnimateBeam />}
        {props.animation === 'waves' && <AnimateWaves />}
      </div>
    )}

    {props.children}
  </div>
);

export { Background };
