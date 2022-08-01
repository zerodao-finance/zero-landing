import Image from 'next/image';

import LogoFull from '../../utils/svg/logos/full';
import LogoOnly from '../../utils/svg/logos/only';

type ILogoProps = {
  xl?: boolean;
  svg?: boolean;
};

const Logo = (props: ILogoProps) => {
  if (props.svg) {
    if (props.xl) {
      return (
        <div className={`w-[200px] h-[40px]`}>
          <LogoFull />
        </div>
      );
    }
    return (
      <div className="w-[50px] h-[50px]">
        <LogoOnly />
      </div>
    );
  }
  if (props.xl) {
    return (
      <Image
        src="/assets/images/logo-full.svg"
        alt="zeroDAO Logo"
        height="60px"
        width="240px"
      />
    );
  }
  return (
    <Image
      src="/assets/images/logo-only.svg"
      alt="zeroDAO Logo"
      height="60px"
      width="60px"
    />
  );
};

export { Logo };
