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
      <Background full spaceBetween animation>
        <Section verticalCenter fullHeight>
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
                description="With the launch of $ZERO and the DAO, the community will be empowered to govern the ZERO protocol."
                button={
                  <div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-center items-center 2xl:justify-start">
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
              <div className="w-full flex flex-col justify-center gap-10">
                <div
                  style={{ margin: '0 auto' }}
                  className={`
                  flex justify-center 
                  ${width > 900 ? 'h-[300px] w-[300px]' : 'h-[200px] w-[200px]'}
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
            { text: width > 600 ? 'Chains Integrated' : 'Chains', value: 3 },
            {
              text: width > 600 ? 'Transactions' : 'TXs',
              value: pastEvents.length,
            },
            { text: width > 600 ? 'Assets Integrated' : 'Assets', value: 6 },
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
