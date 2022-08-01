import Link from 'next/link';

// Hooks
import useWindowDimensions from '../../hooks/WindowDimensions';
import { useAppContext } from '../../store';
import LogoOnly from '../../utils/svg/logos/only';
// Layout
// Components
import { Background } from '../background/Background';
import { CTAButton } from '../buttons/CTA';
import { Button } from '../buttons/Default';
import { Banner } from '../hero/Banner';
import { HeroOneAction } from '../hero/HeroOneAction';
import { Grid } from '../layout/Grid';
import { Section } from '../layout/Section';

const Hero = () => {
  const { totalTransacted, pastEvents, firstLogin } = useAppContext();
  const { width } = useWindowDimensions();

  return (
    <>
      <Background spaceBetween animation>
        {/* Height is to account for full screen including banner */}
        <Section verticalCenter style="min-h-[calc(100vh-200px)]">
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
                description="Enabling gasless bitcoin bridging across various networks. With the launch of $ZERO and the DAO, the community will be empowered to govern the ZERO protocol."
                button={
                  <div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-center items-center xl:justify-start">
                    <Link href="https://bridge.zerodao.com" passHref={true}>
                      <a>
                        <CTAButton text="Launch Bridge" />
                      </a>
                    </Link>
                    <Link href={totalTransacted === 0 ? '/' : '/analytics'}>
                      <a>
                        <Button
                          xl={width > 600}
                          secondary
                          disabled={totalTransacted === 0}
                        >
                          <span
                            className={`${
                              totalTransacted === 0 && 'animate-pulse'
                            }`}
                          >
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
                  ${
                    width > 1200
                      ? 'h-[300px] w-[300px]'
                      : width > 900
                      ? 'h-[250px] w-[250px]'
                      : width > 600
                      ? 'h-[200px] w-[200px]'
                      : 'h-[150px] w-[150px]'
                  }
                `}
                >
                  <LogoOnly />
                </div>
              </div>
            }
          />
        </Section>

        <Banner
          loading={totalTransacted === 0}
          items={[
            {
              text: width > 600 ? 'Total Volume (BTC)' : 'BTC Volume',
              value: totalTransacted,
            },
            { text: width > 600 ? 'Chains Integrated' : 'Chains', value: 5 },
            {
              text: width > 600 ? 'Transactions' : 'TXs',
              value: pastEvents.length,
            },
            { text: width > 600 ? 'Assets Integrated' : 'Assets', value: 7 },
          ]}
        />

        {firstLogin && totalTransacted === 0 && (
          <div
            className={`h-screen w-full absolute left-0 top-0 animate-reveal block z-[999]`}
          />
        )}
      </Background>
    </>
  );
};

export { Hero };
