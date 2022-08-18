import Image from 'next/image';
import Link from 'next/link';

// Hooks & Store
import useWindowDimensions from '../../hooks/WindowDimensions';
import { useAppContext } from '../../store';
import { TOKENS } from '../../utils/Constants';

// Components
import { Background } from '../background/Background';
import { CTAButton } from '../buttons/CTA';
import { Button } from '../buttons/Default';
import { Banner } from '../hero/Banner';
import { HeroOneAction } from '../hero/HeroOneAction';

// Layout
import { Grid } from '../layout/Grid';
import { Section } from '../layout/Section';

// Utils

const Hero = () => {
  const { data, isLoading } = useAppContext();
  const { width } = useWindowDimensions();

  return (
    <>
      <Background spaceBetween animation={'beam'}>
        {/* Height is to account for full screen including banner */}
        <Section
          verticalCenter
          style="min-h-[calc(100vh-180px)] lg:min-h-[calc(100vh-120px)] mt-20 xl:mt-0"
        >
          <Grid
            xl
            left={
              <HeroOneAction
                reactive
                socials
                link={{
                  text: 'Introducing $ZERO',
                  href: 'https://docs.zerodao.com',
                }}
                title="Interoperability Optimized"
                description="Enabling gasless bitcoin and Zcash bridging across various networks. With the launch of $ZERO and the DAO, the community will be empowered to govern the ZERO protocol."
                button={
                  <div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-center items-center xl:justify-start">
                    <Link href="https://bridge.zerodao.com" passHref={true}>
                      <a>
                        <CTAButton text="Launch Bridge" />
                      </a>
                    </Link>
                    <Link href={isLoading ? '/' : '/analytics'}>
                      <a>
                        <Button xl={width > 600} secondary disabled={isLoading}>
                          <span className={`${isLoading && 'animate-pulse'}`}>
                            Analytics
                          </span>
                        </Button>
                      </a>
                    </Link>
                  </div>
                }
              />
            }
            right={
              <div className="w-full flex flex-col justify-center gap-10 mt-5 md:mt-0">
                <div
                  style={{ margin: '0 auto' }}
                  className={`
                  flex justify-center
                `}
                >
                  <Image
                    style={{ filter: 'saturate(0.8) brightness(0.9)' }}
                    src="/assets/3d/ZD-logo-3d.png"
                    alt="zeroDAO Logo"
                    height={
                      width > 1200
                        ? '400'
                        : width > 900
                        ? '350'
                        : width > 600
                        ? '300'
                        : '250'
                    }
                    width={
                      width > 1200
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

        {/* <div className="scroll-downs !mb-10">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div> */}

        <Banner
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
        />
      </Background>
    </>
  );
};

export { Hero };
