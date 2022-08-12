import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

// Hooks & Utils
import CountUp from 'react-countup';

import useWindowDimensions from '../../hooks/WindowDimensions';
import { useAppContext } from '../../store';
import { tokens } from '../../utils/Constants';
import {
  eventsToBarChart,
  filterByDate,
  filterEventByType,
} from '../../utils/Helpers';
// Layout
import { Background } from '../background/Background';
import { CTAButton } from '../buttons/CTA';
import { DefaultCard } from '../cards/Default';
import { ResponsiveLineChart } from '../charts/LineChart';
import { Grid } from '../layout/Grid';
import { Section } from '../layout/Section';
// Components
import { EventsTable } from '../tables/events-table';

const Analytics = () => {
  // Store
  const { transactions, transactionsSum, burns, mints, fetchError } =
    useAppContext();
  // Hooks
  const { width } = useWindowDimensions();
  const router = useRouter();
  // States
  const [formattedEvents, setFormattedEvents] = useState<Array<any>>([]);
  const [type, setType] = useState('All');

  // Subscribers
  useEffect(() => {
    if (transactions) {
      setFormattedEvents(filterByDate(transactions));
    }
  }, [transactions]);

  return (
    <Background>
      <Section
        h1Title
        title="Bridge Analytics"
        description="Bringing you live performance updates about our bridge."
        vertical
        style="!pt-28"
      >
        {transactions && !fetchError && transactionsSum ? (
          <>
            <Grid style="mb-5 lg:mb-10">
              <DefaultCard center minHeight="min-h-[100px]">
                <CountUp
                  start={0}
                  end={parseFloat(transactionsSum.toString())}
                  delay={0}
                  decimals={
                    parseFloat(transactionsSum.toString()) % 1 !== 0 ? 8 : 0
                  }
                >
                  {({ countUpRef }) => (
                    <div className="text-3xl md:text-4xl font-bold">
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
                <p className="">{`Net Volume (BTC)`}</p>
              </DefaultCard>

              <DefaultCard
                className="flex !flex-row !justify-around !items-center"
                minHeight="min-h-[100px]"
              >
                <div className="text-center text-red-300">
                  <CountUp
                    start={0}
                    end={parseFloat(burns.toString())}
                    delay={0}
                    decimals={parseFloat(burns.toString()) % 1 !== 0 ? 8 : 0}
                  >
                    {({ countUpRef }) => (
                      <div className="text-xl md:text-2xl font-bold">
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                  <p className="text-sm">{`Burns`}</p>
                </div>
                <div className="text-center">
                  <CountUp
                    start={0}
                    end={parseFloat(transactions.length.toString())}
                    delay={0}
                    decimals={
                      parseFloat(transactions.length.toString()) % 1 !== 0
                        ? 8
                        : 0
                    }
                  >
                    {({ countUpRef }) => (
                      <div className="text-3xl md:text-4xl font-bold">
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                  <p className="">{`Total Transactions`}</p>
                </div>
                <div className="text-center text-green-200">
                  <CountUp
                    start={0}
                    end={parseFloat(mints.toString())}
                    delay={0}
                    decimals={parseFloat(mints.toString()) % 1 !== 0 ? 8 : 0}
                  >
                    {({ countUpRef }) => (
                      <div className="text-xl md:text-2xl font-bold">
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                  <p className="text-sm">{`Mints`}</p>
                </div>
              </DefaultCard>

              <DefaultCard minHeight="min-h-[100px]" title="Assets Integrated">
                <div className="flex justify-around mt-5">
                  {tokens.map((obj, i) => (
                    <div key={i} className="h-[30px] w-[30px]">
                      <img
                        src={obj.src}
                        alt={obj.alt}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </DefaultCard>
            </Grid>

            <div className="mb-5 lg:mb-10">
              <DefaultCard
                title={
                  width > 900 ? 'Daily Transaction Volume' : 'Daily TX Volume'
                }
                action={setType}
                active={type}
                dropdownText={width > 900 ? 'Transaction Type' : 'TX Type'}
              >
                <ResponsiveLineChart
                  data={eventsToBarChart(
                    filterEventByType(type, transactions),
                    true
                  )}
                />
              </DefaultCard>
            </div>

            <DefaultCard title="All Transactions" largeTitle minHeight="400px">
              <EventsTable
                search={true}
                pagination={false}
                data={formattedEvents}
              />
            </DefaultCard>
          </>
        ) : (
          <div className="min-h-[40vh] flex flex-col items-center justify-center gap-5">
            <p className="text-red-400 text-2xl">Error</p>
            <p className="text-lg text-center">
              Please refresh the page or turn off ad-blocker if there is one
              present.
            </p>
            <CTAButton text="Take Me Home" onClick={() => router.push('/')} />
          </div>
        )}
      </Section>
    </Background>
  );
};

export { Analytics };
