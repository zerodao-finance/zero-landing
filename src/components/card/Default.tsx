import { ReactNode } from 'react';

// Types
type IDefaultCardProps = {
  children: ReactNode;
  color?: string;
  minHeight?: string;
  center?: boolean;
  title?: string;
  largeTitle?: boolean;
};

const DefaultCard = (props: IDefaultCardProps) => (
  <div
    className={`
		${
      props.center &&
      `text-center flex flex-col justify-center items-center h-full w-full`
    }
		${props.minHeight ? props.minHeight : 'min-h-[300px]'}
		${props.color ? props.color : 'bg-gray-900'}
    px-4 py-6 rounded-xl shadow-xl
	`}
  >
    {props.title && (
      <p
        className={`${props.largeTitle && '!text-3xl mb-5'} text-lg font-bold`}
      >
        {props.title}
      </p>
    )}
    {props.children}
  </div>
);

export { DefaultCard };
