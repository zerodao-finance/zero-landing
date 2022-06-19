import { useState } from 'react';

import { BigNumber, utils } from 'ethers';
import useSWR from 'swr';

import { IEventProps } from '../utils/Types';

function useZeroAnalytics() {
  const [pastEvents, setPastEvents] = useState<Array<IEventProps | any>>([]);
  const [totalTransacted, setTotalTransacted] = useState(0);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [eventsErr, setEventsErr] = useState(false);
  const [firstLogin, setFirstLogin] = useState(true);

  useSWR('/api/bridge-events', async (url) => {
    setEventsLoading(true);

    // Pull localStorage while loading new data
    const localTotalTransacted = parseFloat(
      localStorage.getItem('total-transacted') || '0'
    );

    if (firstLogin && localTotalTransacted !== 0) {
      setFirstLogin(false);
      const localEvents: Array<IEventProps> = JSON.parse(
        localStorage.getItem('events') || '[]'
      );

      setTotalTransacted(localTotalTransacted);
      setPastEvents(localEvents);
    }

    fetch(url)
      .then((res) => res.json())
      .then(({ events, totalTransacted: volume, error }) => {
        const formattedAmount = parseFloat(
          utils.formatUnits(BigNumber.from(volume || 0), 8)
        );

        // If same amount, don't re-set
        if (localTotalTransacted !== formattedAmount) {
          localStorage.setItem('total-transacted', String(formattedAmount));
          localStorage.setItem('events', JSON.stringify(events));

          setTotalTransacted(formattedAmount);
          setPastEvents(events);
        }

        setEventsErr(error);
      });

    setEventsLoading(false);
  });

  return {
    firstLogin,
    pastEvents,
    eventsLoading,
    totalTransacted,
    eventsErr,
  };
}

export default useZeroAnalytics;
