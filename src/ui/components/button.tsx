import React, { ReactNode } from 'react';

type IButtonProps = {
  children: string | ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'outline' | 'cta' | 'link' | 'primary';
};

const Button = (props: IButtonProps) => {
  const baseClass = `inline-block rounded-md text-center cursor-pointer text-lg font-semibold py-2 px-4 transition duration-200`;
  if (props.type === 'cta') {
    return (
      <button
        onClick={props.onClick ? props.onClick : () => {}}
        className={`${
          props.className ? props.className : ''
        } overflow-hidden group px-5 py-1.5 space-x-1 transition duration-200 font-bold relative group rounded-full flex items-center bg-gradient-to-r from-[#286638] to-brand-100 hover:to-brand-900`}
      >
        <span className="relative text-md md:text-lg text-neutral-100 uppercase">
          {props.children}
          <span className="absolute -right-8 w-8 h-32 -mt-12 transition-all duration-500 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-44 ease"></span>
        </span>
        <div className="flex items-center -space-x-3 translate-x-3">
          <div className="w-2.5 h-[2px] rounded bg-white origin-left scale-x-0 transition duration-200 group-hover:scale-x-100"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 stroke-white -translate-x-2 transition duration-200 group-hover:translate-x-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>
    );
  }
  if (props.type === 'outline') {
    return (
      <button
        onClick={props.onClick ? props.onClick : () => {}}
        className={`${
          props.className ? props.className : ''
        } overflow-hidden group px-5 py-1.5 space-x-1 transition duration-200 font-bold relative group rounded-full flex items-center border-2 border-brand-900 hover:border-brand-100 hover:text-neutral-300`}
      >
        <span className="relative text-md md:text-lg uppercase">
          {props.children}
          <span className="absolute -right-8 w-8 h-32 -mt-12 transition-all duration-500 transform translate-x-12 bg-white opacity-5 rotate-12 group-hover:-translate-x-44 ease"></span>
        </span>
      </button>
    );
  }
  if (props.type === 'link') {
    return (
      <button
        className={`${baseClass} ${
          props.className ? props.className : ''
        } uppercase !font-medium btn-link !p-1`}
        onClick={props.onClick ? props.onClick : () => {}}
      >
        {props.children}

        <style jsx>
          {`
            .btn-link {
              background-image: linear-gradient(
                to right,
                #41a75b,
                #41a75b 50%,
                #f5f5f5 50%
              );
              background-size: 200% 100%;
              background-position: -100%;
              display: inline-block;
              position: relative;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              transition: all 0.2s ease-in-out;
            }

            .btn-link:hover {
              background-position: 0;
            }
          `}
        </style>
      </button>
    );
  }
  return (
    <button
      className={`${baseClass}
        ${props.className ? props.className : ''} 
        ${props.disabled ? `opacity-50 !cursor-not-allowed !text-white` : ''} 
        uppercase hover:text-neutral-300
      `}
      onClick={props.onClick ? props.onClick : () => {}}
    >
      {props.children}
    </button>
  );
};

export { Button };
