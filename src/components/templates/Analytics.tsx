import Image from 'next/image';
import Link from 'next/link';
// Dependencies
import CountUp from 'react-countup';

// Hooks & Helpers
import useWindowDimensions from '../../hooks/WindowDimensions';
import { useAppContext } from '../../store';
import { eventsToBarChart } from '../../utils/Helpers';
// Store
// Layout
import { Background } from '../background/Background';
import { CTAButton } from '../buttons/CTA';
import { DefaultCard } from '../card/Default';
import { ResponsiveLineChart } from '../charts/LineChart';
import { Grid } from '../layout/Grid';
import { Section } from '../layout/Section';
// Components
import { Navbar } from '../navigation/Navbar';
import { EventsTable } from '../tables/events-table';
import { Logo } from './Logo';

const Analytics = () => {
  const { eventsLoading, totalTransacted, pastEvents } = useAppContext();
  const { width } = useWindowDimensions();

  const quickviewItems = [
    {
      top: eventsLoading ? 'Loading' : `${totalTransacted} BTC`,
      bottom: 'Net Volume (BTC)',
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
        <Grid style="mb-5 lg:mb-10">
          {quickviewItems.map((obj, i) => (
            <div key={i}>
              <DefaultCard center minHeight="min-h-[100px]">
                <CountUp
                  start={0}
                  end={parseFloat(obj.top.toString())}
                  delay={0}
                  decimals={parseFloat(obj.top.toString()) % 1 !== 0 ? 8 : 0}
                >
                  {({ countUpRef }) => (
                    <div className="text-4xl font-bold">
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
                <p className="">{obj.bottom}</p>
              </DefaultCard>
            </div>
          ))}
          <DefaultCard minHeight="min-h-[100px]" title="Assets Integrated">
            <div className="flex justify-around mt-5">
              {tokens.map((obj, i) => (
                <div key={i}>
                  <Image src={obj.src} alt={obj.alt} height="40" width="40" />
                </div>
              ))}
            </div>
          </DefaultCard>
        </Grid>

        <Grid cols="!grid-cols-1" style="mb-5 lg:mb-10">
          <DefaultCard title="Daily Transaction Volume">
            <ResponsiveLineChart data={eventsToBarChart(pastEvents, true)} />
          </DefaultCard>
        </Grid>

        <Grid cols="!grid-cols-1">
          <DefaultCard title="All Transactions" largeTitle>
            <div className="max-h-[400px] overflow-y-scroll">
              <EventsTable data={pastEvents} />
            </div>
          </DefaultCard>
        </Grid>
      </Section>
    </Background>
  );
};

export { Analytics };
