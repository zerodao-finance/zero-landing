import { useState } from 'react';

import { BigNumber, utils } from 'ethers';
import useSWR from 'swr';

import {
  bridgeControllerAddress,
  ethersProvider,
  ethersRenBtcContract,
} from '../utils/Constants';
import { removeDuplicates } from '../utils/Helpers';
import { IEventProps } from '../utils/Types';

function useZeroAnalytics() {
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

    // Filter queries
    const burnFilter = (ethersRenBtcContract.filters as any).Transfer(
      bridgeControllerAddress
    );
    const mintFilter = (ethersRenBtcContract.filters as any).Transfer(
      null,
      bridgeControllerAddress
    );

    // Pulling filtered events
    const burnEvents = await ethersRenBtcContract.queryFilter(burnFilter);
    const mintEvents = await ethersRenBtcContract.queryFilter(mintFilter);

    await Promise.all(
      burnEvents.map(async (event) => {
        const { timestamp } = await ethersProvider.getBlock(event.blockNumber);
        const amount = event.args
          ? utils.formatUnits(BigNumber.from(event.args.value), 8)
          : '0';

        const withTimestampAndAmount = {
          ...event,
          timestamp: new Date(timestamp * 1000).toDateString(),
          amount,
          type: 'burn',
        };

        // Add events to state
        shallowEvents.push(withTimestampAndAmount);
      })
    );

    await Promise.all(
      mintEvents.map(async (event) => {
        const { timestamp } = await ethersProvider.getBlock(event.blockNumber);
        const amount = event.args
          ? utils.formatUnits(BigNumber.from(event.args.value), 8)
          : '0';

        const withTimestampAndAmount = {
          ...event,
          timestamp: new Date(timestamp * 1000).toDateString(),
          amount,
          type: 'mint',
        };

        // Add events to state
        shallowEvents.push(withTimestampAndAmount);
      })
    );

    // Remove Duplicates
    const withoutDupes = removeDuplicates(shallowEvents, 'transactionHash');
    // Get total transacted
    withoutDupes.forEach((el) => {
      shallowTotalTransacted += parseFloat(el.amount);
    });

    // only re-set states and local storage if value is different
    if (shallowTotalTransacted !== localTotalTransacted) {
      localStorage.setItem('total-transacted', String(shallowTotalTransacted));
      localStorage.setItem('events', JSON.stringify(withoutDupes));

      setPastEvents(withoutDupes);
      setTotalTransacted(shallowTotalTransacted);
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
