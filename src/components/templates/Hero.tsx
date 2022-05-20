import Image from 'next/image';
import Link from 'next/link';

// Hooks
import useWindowDimensions from '../../hooks/WindowDimensions';
// Layout
// Components
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Banner } from '../hero/Banner';
import { HeroOneAction } from '../hero/HeroOneAction';
import { Grid } from '../layout/Grid';
import { Section } from '../layout/Section';

const Hero = () => {
  const { width } = useWindowDimensions();

  return (
    <Background full spaceBetween color="bg-gray-800">
      <Section verticalCenter fullHeight>
        <Grid
          left={
            <HeroOneAction
              reactive
              socials
              link={{
                text: 'Introducing $ZERO',
                href: 'https://docs.zerodao.com',
              }}
              title="Interopobility Optimized."
              description="With the launch of $ZERO and the DAO, the community will be empowered to govern the ZERO protocol."
              button={
                <div className="flex gap-5 justify-center 2xl:justify-start">
                  <Link href="https://bridge.zerodao.com" passHref={true}>
                    <a>
                      <Button xl>Launch Bridge</Button>
                    </a>
                  </Link>
                  <Link href="/analytics">
                    <a>
                      <Button xl secondary>
                        Analytics
                      </Button>
                    </a>
                  </Link>
                </div>
              }
            />
          }
          right={
            <div className="w-full flex flex-col justify-center gap-10">
              <Image
                src="/assets/images/logo-only.svg"
                alt="zeroDAO Logo"
                height={width > 900 ? '300' : '200'}
                width={width > 900 ? '300' : '200'}
              />
              <div className="mx-auto w-[300px] md:w-[350px] h-[50px] bg-gradient-radial-shadow" />
            </div>
          }
        />
      </Section>
      <Banner
        items={[
          { text: 'text', value: 5 },
          { text: 'text', value: 5 },
          { text: 'text', value: 5 },
          { text: 'text', value: 5 },
        ]}
      />
    </Background>
  );
};

export { Hero };
