import { Section } from '../layout';
import { Background } from '../layout/background';
import { WhitelistLookup } from '../modals';
import * as T from '../typography';

const ZeroHeroes = () => {
  return (
    <Background color="bg-gradient-to-b from-gray-900 to-gray-1000">
      <Section vertical verticalCenter yPadding="py-10 lg:py-20" title="Heroes">
        <div className="flex flex-col lg:flex-row lg:gap-10">
          <div>
            <img
              src={`/assets/zhero-preview.gif`}
              alt="Zero Heroes GIF"
              loading="lazy"
              className="rounded-md shadow-md shadow-black max-w-sm float w-full sm:w-auto"
            />
          </div>
          <div>
            <div className="mb-5">
              <T.SubTitle text={'The Foundation'} />
              <T.Title
                text={'ZERO Heroes are the foundation of the ZERO Network'}
              />
              <T.Paragraph text="The ZERO Hero collection uses the Diamond Hands smart contract to incentivize holding the NFT. The trick is that each subsequent redemption will receive proportionally more than the previous one. This penalizes early redemptions and encourages NFT holders to exchange their NFTs on the open market vs redeeming." />
              <div className="mt-2 lg:mt-4">
                <T.Paragraph
                  strong
                  big
                  text="Be a hero now to earn a chance at joining the diamond hands game and supporting the ZERO network."
                />
              </div>
            </div>
            <WhitelistLookup />
          </div>
        </div>
      </Section>
    </Background>
  );
};

export { ZeroHeroes };
