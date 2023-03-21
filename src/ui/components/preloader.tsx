import Image from 'next/image';

import { ProgressBar } from './progress-bar';

const PreLoader = () => {
  return (
    <>
      <div
        className={`h-screen w-screen flex flex-col justify-center items-center gap-5`}
      >
        <div>
          <Image
            src="/assets/images/logo-full.svg"
            alt="zeroDAO Logo"
            height="100"
            width="300"
          />
        </div>
        <div>
          <ProgressBar />
        </div>
      </div>
    </>
  );
};

export { PreLoader };
