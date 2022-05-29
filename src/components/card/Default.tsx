import { ReactNode } from 'react';

// Types
type IDefaultCardProps = {
  children: ReactNode;
  color?: string;
  minHeight?: string;
  center?: boolean;
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
    {props.children}
  </div>
);

export { DefaultCard };
