import { ReactNode } from 'react';

import { Dropdown } from './dropdown';

// Types
type IDefaultCardProps = {
  children: ReactNode;
  color?: string;
  minHeight?: string;
  center?: boolean;
  title?: string;
  largeTitle?: boolean;
  maxHeight?: string;
  action?: any;
  active?: string;
  dropdownText?: string;
  className?: string;
};

const DefaultCard = (props: IDefaultCardProps) => (
  <div
    className={`
    ${props.className ? props.className : ''}
		${props.center && `text-center flex flex-col items-center h-full w-full`}
		${props.maxHeight && props.maxHeight}
		${props.minHeight ? props.minHeight : 'min-h-[300px]'}
		${props.color ? props.color : 'bg-brand-black'}
    px-4 py-6 rounded-xl shadow-xl transition duration-200
	`}
  >
    {props.title && (
      <div className="flex justify-between items-center mb-5">
        <p className={`${props.largeTitle && '!text-3xl'} text-lg font-bold`}>
          {props.title}
        </p>
        {props.action && (
          <Dropdown
            action={props.action}
            active={props.active}
            text={props.dropdownText}
          />
        )}
      </div>
    )}
    {props.children}
  </div>
);

export { DefaultCard };
