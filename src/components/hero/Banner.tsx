import CountUp from 'react-countup';

// Types
type IObjectProps = {
  text: string;
  value: number;
};

type IBannerProps = {
  items: Array<IObjectProps>;
  color?: string;
  title?: string;
};

const Banner = (props: IBannerProps) => {
  return (
    <div
      className={`
        ${props.color ? props.color : 'bg-gray-900'}
        flex-col py-5 2xl:py-10
    	`}
    >
      {props.title && (
        <div>
          <h2 className="text-2xl font-bold text-center">{props.title}</h2>
        </div>
      )}

      <div className="flex justify-around md:px-10 max-w-screen-2xl mx-auto">
        {props.items.map((item, i) => (
          <div
            key={i}
            className={`
						sm:min-w-[100px] flex flex-col justify-center text-center
					`}
          >
            <CountUp
              start={0}
              end={item.value}
              delay={0}
              decimals={item.value % 1 !== 0 ? 4 : 0}
            >
              {({ countUpRef }) => (
                <div className="text-2xl font-bold">
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
            <div className={``}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Banner };
