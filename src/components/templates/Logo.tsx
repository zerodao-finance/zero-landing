import Image from 'next/image';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
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
