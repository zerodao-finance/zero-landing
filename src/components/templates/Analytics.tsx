import { useEffect, useState } from 'react';

import Link from 'next/link';

// Hooks & Utils
import CountUp from 'react-countup';

import useWindowDimensions from '../../hooks/WindowDimensions';
import { useAppContext } from '../../store';
import { chains, tokens } from '../../utils/Constants';
import {
  eventsToBarChart,
  filterByDate,
  filterEventByType,
  removeDuplicates,
} from '../../utils/Helpers';
// Layout
import { Background } from '../background/Background';
import { CTAButton } from '../buttons/CTA';
import Dropdown from '../buttons/Dropdown';
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
  // Store
  const { totalTransacted, pastEvents } = useAppContext();
  // Hooks
  const { width } = useWindowDimensions();
  // States
  const [formattedEvents, setFormattedEvents] = useState<Array<any>>([]);
  const [type, setType] = useState('All');

  // Subscribers
  useEffect(() => {
    if (pastEvents)
      setFormattedEvents(
        filterByDate(removeDuplicates(pastEvents, 'transactionHash'))
      );
  }, [pastEvents]);

  // Utils
  const quickviewItems = [
    {
      top: `${totalTransacted} BTC`,
      bottom: 'Net Volume (BTC)',
    },
    {
      top: pastEvents.length,
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
              <CTAButton text="Bridge" sm={width < 600} />
            </a>
          </Link>
        </Navbar>
      </Section>

      <Section
        title="Analytics"
        description="Bringing you live updates about our bridge."
        vertical
        action={<Dropdown items={chains.map((el) => el.name)} text="Chain" />}
      >
        <Grid>
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
                    <div className="text-3xl md:text-4xl font-bold">
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
                </div>
              ))}
            </div>
          </DefaultCard>
        </Grid>

        <Grid cols="!grid-cols-1">
          <DefaultCard
            title={width > 900 ? 'Daily Transaction Volume' : 'Daily TX Volume'}
            action={setType}
            active={type}
          >
            <ResponsiveLineChart
              data={eventsToBarChart(filterEventByType(type, pastEvents), true)}
            />
          </DefaultCard>
        </Grid>

        <Grid cols="!grid-cols-1">
          <DefaultCard title="All Transactions" largeTitle minHeight="400px">
            <EventsTable
              search={true}
              pagination={false}
              data={formattedEvents}
            />
          </DefaultCard>
        </Grid>
      </Section>
    </Background>
  );
};

export { Analytics };
