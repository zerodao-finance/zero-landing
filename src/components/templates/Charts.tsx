import Image from 'next/image';
import Link from 'next/link';

import useWindowDimensions from '../../hooks/WindowDimensions';
import { useAppContext } from '../../store';
// Layout
import { eventsToBarChart } from '../../utils/Helpers';
import { Background } from '../background/Background';
import { CTAButton } from '../button/CallToAction';
import { DefaultCard } from '../card/Default';
import { ResponsiveBarChart } from '../charts/BarChart';
import { Grid } from '../layout/Grid';
import { Section } from '../layout/Section';
// Components
import { Navbar } from '../navigation/Navbar';
import { Logo } from './Logo';

const Charts = () => {
  const { eventsLoading, totalTransacted, pastEvents } = useAppContext();
  const { width } = useWindowDimensions();

  const quickviewItems = [
    {
      top: eventsLoading ? 'Loading' : `${totalTransacted} BTC`,
      bottom: 'Net Volume',
    },
    {
      top: eventsLoading ? 'Loading' : pastEvents.length,
      bottom: 'Total Transactions',
    },
  ];

  const tokens = [
    {
      src: '/assets/svg-coins/btc.svg',
      alt: 'BTC',
    },
    {
      src: '/assets/svg-coins/eth.svg',
      alt: 'ETH',
    },
    {
      src: '/assets/svg-coins/ibbtc.svg',
      alt: 'ibBTC',
    },
    {
      src: '/assets/svg-coins/renbtc.svg',
      alt: 'renBTC',
    },
    {
      src: '/assets/svg-coins/wbtc.svg',
      alt: 'WBTC',
    },
  ];

  return (
    <Background color="bg-gray-800">
      <Section yPadding="py-6">
        <Navbar logo={<Logo xl={width > 900} />}>
          {width > 600 && (
            <li className="hover:text-gray-100 transition duration-200">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
          )}
          <li className="hover:text-gray-100 transition duration-200">
            <Link href="https://docs.zerodao.com" target="_blank">
              <a>Docs</a>
            </Link>
          </li>
          <Link href="https://bridge.zerodao.com">
            <a>
              <CTAButton text={width > 600 ? 'Launch Bridge' : 'Bridge'} />
            </a>
          </Link>
        </Navbar>
      </Section>

      <Section
        title="Analytics"
        description="Bringing you live updates about our bridge."
        vertical
      >
        <Grid style="mb-10">
          {quickviewItems.map((obj, i) => (
            <div key={i}>
              <DefaultCard center minHeight="min-h-[150px]">
                <p className="text-4xl font-bold">{obj.top}</p>
                <p>{obj.bottom}</p>
              </DefaultCard>
            </div>
          ))}
          <DefaultCard minHeight="min-h-[150px]">
            <p className="mb-5 font-bold">Assets Integrated</p>
            <div className="flex justify-around">
              {tokens.map((obj, i) => (
                <div key={i}>
                  <Image src={obj.src} alt={obj.alt} height="40" width="40" />
                </div>
              ))}
            </div>
          </DefaultCard>
        </Grid>

        <Grid cols="!grid-cols-1">
          <DefaultCard>
            <ResponsiveBarChart data={eventsToBarChart(pastEvents, true)} />
          </DefaultCard>
        </Grid>
      </Section>
    </Background>
  );
};

export { Charts };
