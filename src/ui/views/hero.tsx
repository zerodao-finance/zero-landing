import Image from 'next/image';

import { useWindowDimensions } from '../../hooks';
import { Grid, Section, OneActionHero } from '../layout';
import { Background } from '../layout/background';

const Hero = () => {
  const { width, breakpoints } = useWindowDimensions();

  return (
    <>
      <Background spaceBetween animation={'beam'}>
        {/* Height is to account for full screen including banner */}
        <Section
          verticalCenter
          style="min-h-[calc(100vh-160px)] xl:min-h-[calc(100vh-120px)]"
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
                      EVM and non-EVM networks, using multiparty cryptography.
                      The zeroDAO protocol values security, speed, and
                      reliability above all else, ensuring users can safely and
                      quickly move funds across chains.
                    </p>
                    {width > breakpoints.lg && (
                      <>
                        <br />
                        <p>
                          With the launch of $ZERO and the DAO, the community
                          will be empowered to govern the ZERO protocol.
                        </p>
                      </>
                    )}
                  </>
                }
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
                      width > 1600
                        ? '375'
                        : width > 900
                        ? '350'
                        : width > 600
                        ? '300'
                        : '250'
                    }
                    width={
                      width > 1600
                        ? '410'
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
      </Background>
    </>
  );
};

export { Hero };
