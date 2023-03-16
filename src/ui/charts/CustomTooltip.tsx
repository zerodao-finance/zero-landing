import { ICustomTooltipProps } from '../../types/Charts';

function CustomTooltip(props: ICustomTooltipProps) {
  if (props.active) {
    return (
      <div className="bg-white text-black px-5 py-3 rounded-lg">
        <p className="font-bold">{`${props.label || ''}`}</p>
        <p className="">
          {`${
            props.payload && props.payload.length > 0
              ? props.payload[0]?.value
              : '0'
          } BTC
					`}
        </p>
      </div>
    );
  }

  return null;
}

export default CustomTooltip;
