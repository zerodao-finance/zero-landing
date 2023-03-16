import Image from 'next/image';

import { useWindowDimensions } from '../../hooks';
import { Background } from '../background';
import { Grid, Section, OneActionHero } from '../layout';

const Hero = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Background spaceBetween animation={'beam'}>
        {/* Height is to account for full screen including banner */}
        <Section
          verticalCenter
          style="min-h-[calc(100vh-150px)] xl:min-h-[calc(100vh-100px)] mt-20 xl:mt-0"
          // style="min-h-[calc(100vh-180px)] lg:min-h-[calc(100vh-120px)] mt-20 xl:mt-0"
        >
          <Grid
            xl
            left={
              <OneActionHero
                reactive
                socials
                link={{
                  text: 'Introducing $ZERO',
                  href: 'https://docs.zerodao.com',
                }}
                title="Interoperability Optimized"
                description={
                  <>
                    <p>
                      The ZERO network is a fully decentralized layer 0 bridging
                      EVM and non-EVM networks, using multiparty cryptography.{' '}
                      {width > 900 &&
                        'The zeroDAO protocol values security, speed, and reliability above all else, ensuring users can safely and quickly move funds across chains.'}
                    </p>
                    <br />
                    <p>
                      {
                        'With the launch of $ZERO and the DAO, the community will be empowered to govern the ZERO protocol.'
                      }
                    </p>
                  </>
                }
                // button={
                //   <div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-center items-center xl:justify-start">
                //     <Link href="https://bridge.zerodao.com" passHref={true}>
                //       <a>
                //         <CTAButton text="Launch Bridge" />
                //       </a>
                //     </Link>
                //     <Link href={isLoading ? '/' : '/analytics'}>
                //       <a>
                //         <Button xl={width > 600} secondary disabled={isLoading}>
                //           <span className={`${isLoading && 'animate-pulse'}`}>
                //             Analytics
                //           </span>
                //         </Button>
                //       </a>
                //     </Link>
                //   </div>
                // }
              />
            }
            right={
              <div className="w-full flex flex-col justify-center gap-10">
                <div
                  style={{ margin: '0 auto' }}
                  className={`
                  flex justify-center
                `}
                >
                  <Image
                    className="animate-floating"
                    style={{ filter: 'saturate(0.8) brightness(0.9)' }}
                    src="/assets/3d/ZD-logo-3d.png"
                    alt="zeroDAO Logo"
                    height={
                      width > 1500
                        ? '450'
                        : width > 1200
                        ? '400'
                        : width > 900
                        ? '350'
                        : width > 600
                        ? '300'
                        : '250'
                    }
                    width={
                      width > 1500
                        ? '500'
                        : width > 1200
                        ? '440'
                        : width > 900
                        ? '385'
                        : width > 600
                        ? '330'
                        : '275'
                    }
                  />
                </div>
              </div>
            }
          />
        </Section>

        <div className="scroll-downs !mb-10">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>

        {/* <Banner
          loading={isLoading}
          items={[
            {
              text: width > 600 ? 'Total Volume (BTC)' : 'BTC Volume',
              value: data.all.volume,
            },
            { text: width > 600 ? 'Chains Integrated' : 'Chains', value: 5 },
            {
              text: width > 600 ? 'Transactions' : 'TXs',
              value: data.all.transactions.length,
            },
            {
              text: width > 600 ? 'Assets Integrated' : 'Assets',
              value: TOKENS.length,
            },
          ]}
        /> */}
      </Background>
    </>
  );
};

export { Hero };
