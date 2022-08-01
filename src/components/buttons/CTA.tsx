type ICTAButtonProps = {
  text: string;
  onClick?: () => void;
  sm?: boolean;
};

function CTAButton(props: ICTAButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={`
      ${props.sm ? 'px-4 space-x-1' : 'px-5 space-x-2'}
        transition duration-300 h-10 font-bold relative group overflow-hidden rounded-full flex items-center bg-gradient-to-r from-[#286638] to-brand-100 hover:to-brand-900
      `}
    >
      <span className="relative text-md md:text-lg text-white uppercase">
        {props.text}
      </span>
      <div className="flex items-center -space-x-3 translate-x-3">
        <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}

export { CTAButton };
