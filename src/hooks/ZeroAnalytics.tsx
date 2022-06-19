import { useState } from 'react';

import { BigNumber, utils } from 'ethers';
import useSWR from 'swr';

import {
  bridgeControllerAddress,
  BRIDGE_GENESIS_BLOCK,
  ethProvider,
  renBtcContract,
} from '../utils/Constants';
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

    if (firstLogin && localTotalTransacted !== 0) {
      setFirstLogin(false);
      const localEvents: Array<IEventProps> = JSON.parse(
        localStorage.getItem('events') || '[]'
      );

      setTotalTransacted(localTotalTransacted);
      setPastEvents(localEvents);
    }

    // Start revalidation to see if data changed
    const currentBlock = await ethProvider.eth.getBlockNumber();

    const shallowEvents: Array<IEventProps> = [];
    let shallowTotalTransacted = 0;

    let bottomBlock = currentBlock - 10000;
    let topBlock = currentBlock;

    while (topBlock > BRIDGE_GENESIS_BLOCK) {
      // For burns
      const burnEvents = await renBtcContract.getPastEvents('Transfer', {
        fromBlock: bottomBlock,
        toBlock: topBlock,
        filter: {
          from: bridgeControllerAddress,
        },
      });

      burnEvents.map(async (event) => {
        // Add timestamp to TX
        const timestamp: string = (
          await ethProvider.eth.getBlock(event.blockNumber)
        ).timestamp.toString();
        const eventWithTimestamp = {
          ...event,
          timestamp: new Date(parseInt(timestamp, 10) * 1000).toDateString(),
          type: 'burn',
          amount: utils.formatUnits(
            BigNumber.from(event.returnValues.value),
            8
          ),
        };

        // Add events to state
        shallowEvents.push(eventWithTimestamp);

        // Sum up TX totals
        shallowTotalTransacted += parseInt(event.returnValues.value, 10);
      });

      // For mints
      const mintEvents = await renBtcContract.getPastEvents('Transfer', {
        fromBlock: bottomBlock,
        toBlock: topBlock,
        filter: {
          to: bridgeControllerAddress,
        },
      });

      mintEvents.map(async (event) => {
        // Add timestamp to TX
        const timestamp: string = (
          await ethProvider.eth.getBlock(event.blockNumber)
        ).timestamp.toString();

        const eventWithTimestamp = {
          ...event,
          timestamp: new Date(parseInt(timestamp, 10) * 1000).toDateString(),
          type: 'mint',
          amount: utils.formatUnits(
            BigNumber.from(event.returnValues.value),
            8
          ),
        };

        // Add events to state
        shallowEvents.push(eventWithTimestamp);

        // Sum up TX totals
        shallowTotalTransacted += parseInt(event.returnValues.value, 10);
      });

      bottomBlock -= 10000;
      topBlock -= 10000;
    }

    const formattedAmount = parseFloat(
      utils.formatUnits(BigNumber.from(shallowTotalTransacted || 0), 8)
    );

    // If same amount, don't re-set
    if (localTotalTransacted !== formattedAmount) {
      localStorage.setItem('total-transacted', String(formattedAmount));
      localStorage.setItem('events', JSON.stringify(shallowEvents));

      setTotalTransacted(formattedAmount);
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
