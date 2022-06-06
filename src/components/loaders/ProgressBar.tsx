type IProgressBarProps = {
  percent?: boolean;
};

function ProgressBar(props: IProgressBarProps) {
  return (
    <div className="w-[300px] bg-gray-300 rounded-full">
      <div
        className={`bg-brand-900 text-xs font-medium text-white text-center p-0.5 leading-none rounded-l-full w-[100px]`}
      >
        {props.percent || `25%`}
      </div>
    </div>
  );
}

export { ProgressBar };
