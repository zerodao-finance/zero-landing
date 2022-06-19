import { ReactNode } from 'react';

import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string | ReactNode;
  secondary?: boolean;
  disabled?: boolean;
  className?: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  if (props.secondary) {
    return (
      <div
        className={`${btnClass} ${
          props.className &&
          props.disabled &&
          `opacity-50 !cursor-not-allowed !text-white`
        } uppercase`}
      >
        {props.children}

        <style jsx>
          {`
            .btn {
              @apply inline-block rounded-md text-center;
            }

            .btn-base {
              @apply text-lg font-semibold py-2 px-4;
            }

            .btn-xl {
              @apply font-extrabold text-xl py-4 px-6;
            }

            .btn-primary {
              @apply text-white transition duration-200;
            }

            .btn-primary:hover {
              @apply text-[rgba(255,255,255,0.8)];
            }
          `}
        </style>
      </div>
    );
  }
  return (
    <div
      className={`${btnClass} ${
        props.disabled && `opacity-50 !cursor-not-allowed !text-white`
      }`}
    >
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
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
    </div>
  );
};

export { Button };
