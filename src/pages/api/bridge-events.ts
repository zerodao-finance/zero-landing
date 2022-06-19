import { utils, BigNumber } from 'ethers';
import type { NextApiRequest, NextApiResponse } from 'next';

import {
  bridgeControllerAddress,
  BRIDGE_GENESIS_BLOCK,
  ethProvider,
  renBtcContract,
} from '../../utils/Constants';
import { IEventProps } from '../../utils/Types';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
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

    res.status(200).json({
      totalTransacted: shallowTotalTransacted,
      events: shallowEvents,
      error: false,
    });
  } catch (err) {
    res.status(500).json({ error: 'Error Occured', err });
  }
}
