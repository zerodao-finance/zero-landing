import { useState } from 'react';

import Link from 'next/link';
import CountUp from 'react-countup';

import { useWindowDimensions } from '../../hooks';
import { useAppContext } from '../../store';
import { TOKEN_MAPPING } from '../../utils/constants';
import {
  eventsToBarChart,
  filterByDate,
  filterEventByType,
} from '../../utils/helpers';
import { Background } from '../background';
import { ResponsiveLineChart } from '../charts/line-chart';
import { Dropdown, CTAButton, DefaultCard } from '../components';
import { Grid, Section } from '../layout';
import { EventsTable } from '../tables';

const Analytics = () => {
  // Store & Hooks
  const { data, isLoading, isError } = useAppContext();
  const { width } = useWindowDimensions();
  // States
  const [type, setType] = useState('All');
  const [chain, setChain] = useState('All');
  // Casted
  const castedChain = chain.toLowerCase() as string as keyof typeof data;

  return (
    <Background>
      <Section
        h1Title
        title="Bridge Analytics"
        description="Bringing you live performance updates about our bridge."
        vertical
        style="!pt-28"
      >
        {!isLoading ? (
          <>
            <div className="w-full flex justify-end mb-5 lg:mb-10">
              <Dropdown
                text={`Chain: ${chain}`}
                items={['All', 'ETH', 'MATIC', 'AVAX', 'ARB']}
                action={setChain}
                active={chain}
              />
            </div>

            <Grid style="mb-5 lg:mb-10">
              <DefaultCard center minHeight="min-h-[100px]">
                <CountUp
                  start={0}
                  end={parseFloat(data[castedChain].volume.toString())}
                  delay={0}
                  decimals={
                    parseFloat(data[castedChain].volume.toString()) % 1 !== 0
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
                <p className="">{`Net Volume (BTC)`}</p>
              </DefaultCard>

              <DefaultCard
                className="flex !flex-row !justify-around !items-center"
                minHeight="min-h-[100px]"
              >
                <div className="text-center text-red-300">
                  <CountUp
                    start={0}
                    end={parseFloat(data[castedChain].burns.toString())}
                    delay={0}
                    decimals={
                      parseFloat(data[castedChain].burns.toString()) % 1 !== 0
                        ? 8
                        : 0
                    }
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
                    end={parseFloat(
                      data[castedChain].transactions.length.toString()
                    )}
                    delay={0}
                    decimals={
                      parseFloat(
                        data[castedChain].transactions.length.toString()
                      ) %
                        1 !==
                      0
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
                    end={parseFloat(data[castedChain].mints.toString())}
                    delay={0}
                    decimals={
                      parseFloat(data[castedChain].mints.toString()) % 1 !== 0
                        ? 8
                        : 0
                    }
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
                  {TOKEN_MAPPING[castedChain].map((obj: any, i: number) => (
                    <div key={i} className="h-[24px] w-[24px]">
                      <img
                        src={obj?.src}
                        alt={obj?.alt}
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
                dropdownText={`${
                  width > 900 ? 'Transaction Type' : 'TX Type'
                }: ${type}`}
              >
                <ResponsiveLineChart
                  data={eventsToBarChart(
                    filterEventByType(type, data[castedChain].transactions),
                    true
                  )}
                />
              </DefaultCard>
            </div>

            <DefaultCard title="All Transactions" largeTitle minHeight="400px">
              <EventsTable
                search={true}
                pagination={false}
                data={filterByDate(data[castedChain].transactions)}
              />
            </DefaultCard>
          </>
        ) : isError ? (
          <div className="min-h-[40vh] flex flex-col items-center justify-center gap-5">
            <p className="text-red-400 text-2xl">Error</p>
            <p className="text-lg text-center">
              Please refresh the page or turn off ad-blocker if there is one
              present.
            </p>
            <Link href="/">
              <a>
                <CTAButton text="Take Me Home" />
              </a>
            </Link>
          </div>
        ) : (
          <div className="min-h-[40vh] flex flex-col items-center justify-center gap-5">
            <div role="status">
              <svg
                className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-brand-900"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </Section>
    </Background>
  );
};

export { Analytics };
