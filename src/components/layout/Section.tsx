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
  action?: ReactNode;
};

const Section = (props: ISectionProps) => {
  const { height, width } = useWindowDimensions();

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
      <div className={`flex justify-between mb-5 items-end`}>
        {/* Invisible to keep title centered w/ flex between */}
        {props.action && (
          <div className={`${width < 600 ? 'hidden' : ''} opacity-0`}>
            {props.action}
          </div>
        )}

        {/* Title and Description */}
        {(props.title || props.description) && (
          <div className={`${width < 600 ? 'text-left' : 'text-center'}`}>
            {props.title && (
              <h2 className="text-3xl md:text-4xl text-white font-bold">
                {props.title}
              </h2>
            )}
            {props.description && (
              <div
                className={`mt-2 md:mt-4 text-lg md:text-xl ${
                  props.action && width < 600 ? 'max-w-[200px]' : ''
                }`}
              >
                {props.description}
              </div>
            )}
          </div>
        )}

        {/* Action */}
        {props.action && props.action}
      </div>

      {/* Section Content */}
      {props.children}
    </div>
  );
};

export { Section };
