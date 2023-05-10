import LogoFull from '../../utils/svg/logos/full';
import LogoOnly from '../../utils/svg/logos/only';

type ILogoProps = {
  type?: 'logo' | 'full' | 'text';
};

const Logo = (props: ILogoProps) => {
  if (props.type === 'text') {
    return (
      <div className="w-[150px] h-[25px]">
        <img src="/assets/images/logos/text-only.png" alt="zeroDAO Logo" />
      </div>
    );
  }
  if (props.type === 'logo') {
    return (
      <div className="w-[40px] h-[40px]">
        <LogoOnly />
      </div>
    );
  }
  return (
    <div className={`w-[200px] h-[40px]`}>
      <LogoFull />
    </div>
  );
};

export { Logo };
