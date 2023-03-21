type ILabelProps = {
  text: string | null;
  className?: string;
};

export const Label = ({ text, className }: ILabelProps) => {
  const renderLabelClass = (label?: string | null) => {
    const baseClass = 'text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3';
    let customClass = '';
    if (label) {
      switch (label.toLowerCase()) {
        case 'network':
          customClass = 'bg-green-100 text-brand-900';
          break;
        case 'nft':
          customClass = 'bg-blue-100 text-blue-500';
          break;
        case 'token':
          customClass = 'bg-yellow-100 text-yellow-600';
          break;
        default:
          return baseClass;
      }
      return `${baseClass} ${customClass}`;
    }
    return baseClass;
  };

  return (
    <span className={`${renderLabelClass(text)} ${className}`}>
      {text || 'Label'}
    </span>
  );
};
