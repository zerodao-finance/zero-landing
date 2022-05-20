type IObjectProps = {
  text: string;
  value: string | number;
};

type IBannerProps = {
  items: Array<IObjectProps>;
  color?: string;
};

const Banner = (props: IBannerProps) => {
  return (
    <div
      className={`
        ${props.color ? props.color : 'bg-gray-900'}
    	`}
    >
      <div className="flex justify-around md:px-10 py-5 2xl:py-10 max-w-screen-2xl mx-auto">
        {props.items.map((item, i) => (
          <div
            key={i}
            className={`
						sm:min-w-[100px] flex flex-col justify-center text-center
					`}
          >
            <div className={`text-2xl font-bold`}>{item.value}</div>
            <div className={``}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Banner };
