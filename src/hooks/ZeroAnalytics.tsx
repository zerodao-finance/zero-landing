import { useState } from 'react';

import { BigNumber, utils } from 'ethers';
import useSWR from 'swr';

import { IEventProps } from '../utils/Types';
import { PROVIDERS } from '../utils/web3/Providers';
import useBridgeEvents from './BridgeEvents';

function useZeroAnalytics() {
  const { getAllEvents } = useBridgeEvents();
  const [pastEvents, setPastEvents] = useState<Array<IEventProps | any>>([]);
  const [totalTransacted, setTotalTransacted] = useState(0);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [firstLogin, setFirstLogin] = useState(true);

  useSWR('bridge-events', async () => {
    setEventsLoading(true);

    // Pull localStorage while loading new data
    const localTotalTransacted = parseFloat(
      localStorage.getItem('total-transacted') || '0'
    );

    // Check localstorage
    if (firstLogin && localTotalTransacted !== 0) {
      setFirstLogin(false);
      const localEvents: Array<IEventProps | any> = JSON.parse(
        localStorage.getItem('events') || '[]'
      );

      setTotalTransacted(localTotalTransacted);
      setPastEvents(localEvents);
    }

    // Temp vars
    const shallowEvents: Array<IEventProps | any> = [];
    let shallowTotalTransacted = 0;

    // Pulling filtered events
    const allEvents = await getAllEvents();

    await Promise.all(
      allEvents.map(async (el) => {
        await Promise.all(
          el.events.map(async (event) => {
            const { timestamp } = await PROVIDERS.ETHEREUM.getBlock(
              event.blockNumber
            );
            const amount = event.args
              ? utils.formatUnits(BigNumber.from(event.args.value), 8)
              : '0';

            const withTimestampAndAmount = {
              ...event,
              timestamp: new Date(timestamp * 1000).toDateString(),
              amount,
              type: el.type,
              chain: el.chain,
            };

            // Add events to state
            shallowEvents.push(withTimestampAndAmount);

            // Sum up TX totals
            shallowTotalTransacted += parseFloat(amount);
          })
        );
      })
    );

    // If same amount like in localstorage, don't re-set
    if (localTotalTransacted !== shallowTotalTransacted) {
      localStorage.setItem('total-transacted', String(shallowTotalTransacted));
      localStorage.setItem('events', JSON.stringify(shallowEvents));

      setTotalTransacted(shallowTotalTransacted);
      setPastEvents(shallowEvents);
    }

    setEventsLoading(false);
  });

  return {
    firstLogin,
    pastEvents,
    eventsLoading,
    totalTransacted,
  };
}

export default useZeroAnalytics;
