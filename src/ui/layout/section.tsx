import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string | ReactNode;
  yPadding?: string;
  children: ReactNode;
  wide?: boolean;
  verticalCenter?: boolean;
  fullHeight?: boolean;
  vertical?: boolean;
  style?: string;
  h1Title?: boolean;
};

const Section = (props: ISectionProps) => (
  <div
    className={`
      ${props.wide ? 'max-w-screen-2xl' : 'max-w-screen-xl'} 
      ${
        props.yPadding
          ? props.yPadding
          : props.verticalCenter
          ? '0'
          : 'py-8 md:py-10 lg:py-12'
      }
      ${props.verticalCenter && 'flex items-center'}
      ${props.fullHeight && 'h-full'}
      ${props.vertical && 'flex-col'}
      ${props.style && props.style}
      mx-auto px-4 lg:px-8 flex justify-center
    `}
  >
    {(props.title || props.description) && (
      <div className="text-center">
        {props.title && (
          <>
            {props.h1Title ? (
              <h1 className="text-2xl 2xl:text-3xl uppercase font-bold mb-5 lg:mb-10">
                {props.title}
              </h1>
            ) : (
              <h2 className="text-2xl 2xl:text-3xl font-bold uppercase mb-5 lg:mb-10">
                {props.title}
              </h2>
            )}
          </>
        )}
        {props.description && (
          <div className="mt-2 md:mt-4 text-lg md:text-xl md:px-20 mb-12">
            {props.description}
          </div>
        )}
      </div>
    )}
    {props.children}
  </div>
);

export { Section };
