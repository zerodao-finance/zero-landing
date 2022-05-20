import { useState } from 'react';

import Web3 from 'web3';

// type IEventProps = {
// TODO: build out event interface
//

function useZeroAnalytics() {
  const [pastEvents, setPastEvents] = useState<Array<any>>([]);

  const web3 = new Web3(
    'https://mainnet.infura.io/v3/816df2901a454b18b7df259e61f92cd2'
  );

  // eslint-disable-next-line
    const { abi, address } = require('zero-protocol/deployments/mainnet/BadgerBridgeZeroController.json'); 
  const contract = new web3.eth.Contract(abi, address);

  const getPastEvents = async () => {
    const events = await contract.getPastEvents('allEvents');
    setPastEvents(events);
  };

  return {
    pastEvents,
    getPastEvents,
  };
}

export default useZeroAnalytics;
