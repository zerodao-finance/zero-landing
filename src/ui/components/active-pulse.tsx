type IActivePulseProps = {
  className?: string;
  color?: 'green' | 'blue' | 'red';
};

export const ActivePulse = ({
  className,
  color = 'green',
}: IActivePulseProps) => {
  const determineColor = () => {
    switch (color) {
      case 'green':
        return ['bg-brand-100', 'bg-brand-900'];
      case 'blue':
        return ['bg-sky-400', 'bg-sky-500'];
      case 'red':
        return ['bg-red-400', 'bg-red-500'];
      default:
        return ['', ''];
    }
  };

  return (
    <span className={`absolute flex h-3 w-3 ${className}`}>
      <span
        className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
          determineColor()[0]
        } opacity-75`}
      />
      <span
        className={`relative inline-flex rounded-full h-3 w-3 ${
          determineColor()[1]
        }`}
      />
    </span>
  );
};
