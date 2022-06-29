import { useState } from 'react';

import { BigNumber, utils } from 'ethers';
import useSWR from 'swr';

import { IEventProps } from '../utils/Types';
import * as CONTRACTS from '../utils/web3/Contracts';
import * as FILTERS from '../utils/web3/Filters';
import { PROVIDERS } from '../utils/web3/Providers';

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

    // Pulling filtered events
    // ETH
    const ethBurnEvents = await CONTRACTS.ethRenBtcContract.queryFilter(
      FILTERS.ethBurnFilter
    );
    const ethMintEvents = await CONTRACTS.ethRenBtcContract.queryFilter(
      FILTERS.ethMintFilter
    );
    // ARB
    const arbBurnEvents = await CONTRACTS.arbRenBtcContract.queryFilter(
      FILTERS.arbBurnFilter
    );
    const arbMintEvents = await CONTRACTS.arbRenBtcContract.queryFilter(
      FILTERS.arbMintFilter
    );
    // AVAX
    const avaxBurnEvents = await CONTRACTS.avaxRenBtcContract.queryFilter(
      FILTERS.avaxBurnFilter
    );
    const avaxMintEvents = await CONTRACTS.avaxRenBtcContract.queryFilter(
      FILTERS.avaxMintFilter
    );
    // MATIC
    const maticBurnEvents = await CONTRACTS.maticRenBtcContract.queryFilter(
      FILTERS.maticBurnFilter
    );
    const maticMintEvents = await CONTRACTS.maticRenBtcContract.queryFilter(
      FILTERS.maticMintFilter
    );

    console.log(
      arbBurnEvents,
      arbMintEvents,
      avaxBurnEvents,
      avaxMintEvents,
      maticBurnEvents,
      maticMintEvents
    );

    // Looping through events
    // ETH
    await Promise.all(
      ethBurnEvents.map(async (event) => {
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
          type: 'burn',
          chain: 'eth',
        };

        // Add events to state
        shallowEvents.push(withTimestampAndAmount);

        // Sum up TX totals
        shallowTotalTransacted += parseFloat(amount);
      })
    );

    await Promise.all(
      ethMintEvents.map(async (event) => {
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
          type: 'mint',
          chain: 'eth',
        };

        // Add events to state
        shallowEvents.push(withTimestampAndAmount);

        // Sum up TX totals
        shallowTotalTransacted += parseFloat(amount);
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
