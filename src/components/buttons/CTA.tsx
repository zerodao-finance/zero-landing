type ICTAButtonProps = {
  text: string;
  onClick?: () => void;
};

function CTAButton(props: ICTAButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className="transition duration-300 font-bold relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-[#286638] to-brand-100 hover:to-brand-900"
    >
      <span className="relative text-lg text-white">{props.text}</span>
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