import { Section } from '../layout';
import { Background } from '../layout/background';
import { WhitelistLookup } from '../modals';
import * as T from '../typography';

const ZeroHeroes = () => {
  return (
    <Background color="bg-gradient-to-b from-gray-900 to-gray-1000">
      <Section vertical verticalCenter yPadding="py-10 lg:py-20" title="Heroes">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
          <div>
            <img
              src={`/assets/zhero-preview.gif`}
              alt="Zero Heroes GIF"
              loading="lazy"
              className="rounded-md shadow-md shadow-black max-w-sm float w-full sm:w-auto"
            />
          </div>
          {/* <div className="flex flex-col gap-2">
            <T.Title text="ZERO Heroes are the foundation of the ZERO Network." />
            <div className="flex flex-col gap-2 lg:gap-4">
              <T.Paragraph text="The ZERO Hero collection uses the Diamond Hands smart contract to incentivize holding the NFT. The trick is that each subsequent redemption will receive proportionally more than the previous one. This penalizes early redemptions and encourages NFT holders to exchange their NFTs on the open market vs redeeming." />
              <T.Paragraph text="Be a ZERO Hero now to earn passive yields and provide stability to ZERO Network." />
            </div>
            <div className="mt-2 flex flex-row gap-3">
              <WhitelistQuiz /> 
              <WhitelistLookup />
            </div>
          </div> */}
          <div>
            <div className="mb-5">
              <T.SubTitle text={'The Foundation'} />
              <T.Title
                text={'ZERO Heroes are the foundation of the ZERO Network'}
              />
              <T.Paragraph text="The ZERO Hero collection uses the Diamond Hands smart contract to incentivize holding the NFT. The trick is that each subsequent redemption will receive proportionally more than the previous one. This penalizes early redemptions and encourages NFT holders to exchange their NFTs on the open market vs redeeming." />
              <br />
              <T.Paragraph
                strong
                big
                text="Be a ZERO Hero now to earn passive yields and provide stability to ZERO Network."
              />
            </div>
            <WhitelistLookup />
          </div>
        </div>
      </Section>
    </Background>
  );
};

export { ZeroHeroes };
