import { ReactNode } from 'react';

import useWindowDimensions from '../../hooks/WindowDimensions';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
  wide?: boolean;
  verticalCenter?: boolean;
  fullHeight?: boolean;
  vertical?: boolean;
  style?: string;
};

const Section = (props: ISectionProps) => {
  const { height } = useWindowDimensions();

  return (
    <div
      className={`
      ${props.style && props.style}
      ${props.wide ? 'max-w-screen-2xl' : 'max-w-screen-xl'} 
      ${
        props.yPadding
          ? props.yPadding
          : props.verticalCenter
          ? '0'
          : 'py-8 md:py-10 lg:py-12'
      }
      ${props.verticalCenter && 'flex items-center'}
      ${props.fullHeight && height > 700 && 'h-screen'}
      ${props.vertical && 'flex-col'}
      mx-auto px-5 lg:px-10 flex justify-center
    `}
    >
      {(props.title || props.description) && (
        <div className="mb-12 text-center">
          {props.title && (
            <h2 className="text-3xl md:text-4xl text-white font-bold">
              {props.title}
            </h2>
          )}
          {props.description && (
            <div className="mt-2 md:mt-4 text-lg md:text-xl md:px-20">
              {props.description}
            </div>
          )}
        </div>
      )}
      {props.children}
    </div>
  );
};

export { Section };
