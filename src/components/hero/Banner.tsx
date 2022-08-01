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
  loading?: boolean;
};

const Banner = (props: IBannerProps) => {
  return (
    <div
      className={`
        ${props.color ? props.color : 'bg-gray-800'}
        flex-col
    	`}
    >
      {props.title && (
        <div>
          <h2 className="text-2xl font-bold text-center">{props.title}</h2>
        </div>
      )}

      <div className="flex justify-around md:px-10 max-w-screen-2xl mx-auto min-h-[100px] lg:py-6">
        {props.items.map((item, i) => (
          <div
            key={i}
            className={`
						sm:min-w-[100px] flex flex-col justify-center text-center
					`}
          >
            {props.loading && props.items[0]?.value === 0 ? (
              <div className="text-2xl lg:text-3xl font-bold animate-pulse">
                <span>0</span>
              </div>
            ) : (
              <CountUp
                start={0}
                end={item.value}
                delay={0}
                decimals={item.value % 1 !== 0 ? 3 : 0}
              >
                {({ countUpRef }) => (
                  <div className="text-2xl lg:text-3xl font-bold">
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            )}
            <div className={`text-sm md:text-md text-neutral-300`}>
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Banner };
