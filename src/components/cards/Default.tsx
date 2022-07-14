import { ReactNode } from 'react';

import Dropdown from '../buttons/Dropdown';

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
};

const DefaultCard = (props: IDefaultCardProps) => (
  <div
    className={`
		${
      props.center &&
      `text-center flex flex-col justify-center items-center h-full w-full`
    }
		${props.maxHeight && props.maxHeight}
		${props.minHeight ? props.minHeight : 'min-h-[300px]'}
		${props.color ? props.color : 'bg-brand-black'}
    px-4 py-6 rounded-xl shadow-xl
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
