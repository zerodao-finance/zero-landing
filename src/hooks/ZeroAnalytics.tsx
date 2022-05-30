import { useState } from 'react';

import { BigNumber, utils } from 'ethers';
import Web3 from 'web3';

import { IEventProps } from '../utils/Types';

const GENESIS_BLOCK = 14567078;

function useZeroAnalytics() {
  const [pastEvents, setPastEvents] = useState<Array<IEventProps>>([]);
  const [totalTransacted, setTotalTransacted] = useState('0');
  const [eventsLoading, setEventsLoading] = useState(false);

  const web3 = new Web3(
    'https://mainnet.infura.io/v3/816df2901a454b18b7df259e61f92cd2'
  );

  // eslint-disable-next-line
  const { address: controllerAddress } = require('zero-protocol/deployments/mainnet/BadgerBridgeZeroController.json');   
  // eslint-disable-next-line
  const { abi, address } = require('../utils/RenbtcDeployment.json'); 

  const contract = new web3.eth.Contract(abi, address);

  const getPastEvents = async () => {
    setEventsLoading(true);
    const currentBlock = await web3.eth.getBlockNumber();

    const shallowEvents: Array<IEventProps> = [];
    let shallowTotalTransacted = 0;

    let bottomBlock = currentBlock - 10000;
    let topBlock = currentBlock;

    while (topBlock > GENESIS_BLOCK) {
      // For burns
      const burnEvents = await contract.getPastEvents('Transfer', {
        fromBlock: bottomBlock,
        toBlock: topBlock,
        filter: {
          from: controllerAddress,
        },
      });

      burnEvents.map(async (event) => {
        // Add timestamp to TX
        const timestamp: string = (
          await web3.eth.getBlock(event.blockNumber)
        ).timestamp.toString();
        const eventWithTimestamp = {
          ...event,
          timestamp: new Date(parseInt(timestamp, 10) * 1000).toDateString(),
          type: 'burn',
        };
        // Add events to state
        shallowEvents.push(eventWithTimestamp);
        // Sum up TX totals
        shallowTotalTransacted += parseInt(event.returnValues.value, 10);
      });

      // For mints
      const mintEvents = await contract.getPastEvents('Transfer', {
        fromBlock: bottomBlock,
        toBlock: topBlock,
        filter: {
          to: controllerAddress,
        },
      });

      mintEvents.map(async (event) => {
        // Add timestamp to TX
        const timestamp: string = (
          await web3.eth.getBlock(event.blockNumber)
        ).timestamp.toString();

        const eventWithTimestamp = {
          ...event,
          timestamp: new Date(parseInt(timestamp, 10) * 1000).toDateString(),
          type: 'mint',
        };
        // Add events to state
        shallowEvents.push(eventWithTimestamp);
        // Sum up TX totals
        shallowTotalTransacted += parseInt(event.returnValues.value, 10);
      });

      bottomBlock -= 10000;
      topBlock -= 10000;
    }

    setTotalTransacted(
      utils.formatUnits(BigNumber.from(shallowTotalTransacted), 8)
    );
    setPastEvents(shallowEvents);
    setEventsLoading(false);
  };

  console.log(pastEvents);

  return {
    pastEvents,
    getPastEvents,
    eventsLoading,
    totalTransacted,
  };
}

export default useZeroAnalytics;
