import { Section } from '../layout';
import { Background } from '../layout/background';
import * as T from '../typography';

const Demo = () => {
  return (
    <Background color="bg-gradient-to-b from-gray-1000 to-gray-900">
      <Section vertical verticalCenter yPadding="py-10 lg:py-20" title="Demo">
        <div className="mb-5 text-center">
          <T.SubTitle text={'See it in Action'} />
          <T.Title text={'ZERO App Demo'} />
        </div>
        <div className="flex justify-center mt-8">
          <div className="w-full max-w-4xl rounded-md overflow-hidden shadow-lg shadow-black">
            <video
              controls
              className="w-full h-auto"
              poster="/assets/3d/ZD-logo-3d.png"
            >
              <source src="/zero-usdc.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Section>
    </Background>
  );
};

export { Demo };
