import { ReactNode } from 'react';

// Types
type IDefaultCardProps = {
  children: ReactNode;
	color?: string;
};

const DefaultCard = (props: IDefaultCardProps) => (
  <div className={`
		${props.color ? props.color : "bg-gray-900"}
    px-4 py-6 rounded-xl
	`}>
      {props.children}
  </div>
);

export { DefaultCard };
