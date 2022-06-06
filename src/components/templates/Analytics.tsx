import { useEffect, useState } from 'react';

import Link from 'next/link';

// Hooks & Utils
import CountUp from 'react-countup';

import useWindowDimensions from '../../hooks/WindowDimensions';
import { useAppContext } from '../../store';
import { tokens } from '../../utils/Constants';
import { eventsToBarChart, removeDuplicates } from '../../utils/Helpers';
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
// External

const Analytics = () => {
  const { eventsLoading, totalTransacted, pastEvents } = useAppContext();
  const { width } = useWindowDimensions();
  const [formattedEvents, setFormattedEvents] = useState<Array<any>>([]);

  useEffect(() => {
    if (pastEvents)
      setFormattedEvents(removeDuplicates(pastEvents, 'transactionHash'));
  }, [pastEvents]);

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

  return (
    <Background>
      <Section yPadding="py-6">
        <Navbar logo={<Logo xl={width > 900} svg />}>
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
                <div key={i} className="h-[40px] w-[40px]">
                  <obj.svg />
                  {/* <Image src={obj.src} alt={obj.alt} height="40" width="40" /> */}
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
              <EventsTable data={formattedEvents} />
            </div>
            {/* IN PROG */}
            {/* <Pagination
              data={formattedEvents} 
            /> */}
          </DefaultCard>
        </Grid>
      </Section>
    </Background>
  );
};

export { Analytics };
