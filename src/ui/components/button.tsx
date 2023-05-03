import React, { ReactNode } from 'react';

type IButtonProps = {
  children: string | ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'secondary' | 'cta' | 'primary';
};

const Button = (props: IButtonProps) => {
  const baseClass = `inline-block rounded-md text-center cursor-pointer text-lg font-semibold py-2 px-4`;

  if (props.type === 'cta') {
    return (
      <button
        onClick={props.onClick ? props.onClick : () => {}}
        className={`px-5 py-1.5 space-x-1 transition duration-200 font-bold relative group rounded-full flex items-center bg-gradient-to-r from-[#286638] to-brand-100 hover:to-brand-900`}
      >
        <span className="relative text-md md:text-lg text-neutral-100 uppercase">
          {props.children}
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
  if (props.type === 'secondary') {
    return (
      <button
        className={`${baseClass}
          ${props.className ? props.className : ''} 
          ${props.disabled ? `opacity-50 !cursor-not-allowed !text-white` : ''} 
          uppercase
        `}
        onClick={props.onClick ? props.onClick : () => {}}
      >
        {props.children}
      </button>
    );
  }
  return (
    <button
      className={`${baseClass}
        ${props.className ? props.className : ''} 
        ${props.disabled ? `opacity-50 !cursor-not-allowed !text-white` : ''} 
        uppercase
      `}
      onClick={props.onClick ? props.onClick : () => {}}
    >
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center cursor-pointer;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-brand-100 transition duration-200;
          }

          .btn-primary:hover {
            @apply bg-brand-900;
          }
        `}
      </style>
    </button>
  );
};

export { Button };
