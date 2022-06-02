import Image from 'next/image';

const PreLoader = () => {
  return (
    <>
      <div
        className={`h-screen w-screen flex justify-center items-center animate-fade`}
      >
        <div className={`animate-fade-transparent`}>
          <Image
            src="/assets/images/logo-only.svg"
            alt="Logo"
            height="100"
            width="100"
          />
        </div>
      </div>
    </>
  );
};

export { PreLoader };
