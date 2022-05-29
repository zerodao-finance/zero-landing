import { ICustomTooltipProps } from '../../utils/Types';

function CustomTooltip(props: ICustomTooltipProps) {
  if (props.active) {
    return (
      <div className="bg-white text-black px-5 py-3 rounded-lg">
        <p className="font-bold">{`${props.label || ''}`}</p>
        <p className="">{`${props.payload[0]?.value || ''} BTC`}</p>
      </div>
    );
  }

  return null;
}

export default CustomTooltip;
