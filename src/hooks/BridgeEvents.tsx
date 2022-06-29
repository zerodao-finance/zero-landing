import * as CONTRACTS from '../utils/web3/Contracts';
import * as FILTERS from '../utils/web3/Filters';

function useBridgeEvents() {
  const getEthEvents = async () => {
    const ethBurnEvents = await CONTRACTS.ethRenBtcContract.queryFilter(
      FILTERS.ethBurnFilter
    );
    const ethMintEvents = await CONTRACTS.ethRenBtcContract.queryFilter(
      FILTERS.ethMintFilter
    );

    return {
      ethBurnEvents,
      ethMintEvents,
    };
  };

  const getArbEvents = async () => {
    const arbBurnEvents = await CONTRACTS.arbRenBtcContract.queryFilter(
      FILTERS.arbBurnFilter
    );
    const arbMintEvents = await CONTRACTS.arbRenBtcContract.queryFilter(
      FILTERS.arbMintFilter
    );

    return {
      arbBurnEvents,
      arbMintEvents,
    };
  };

  const getAvaxEvents = async () => {
    const avaxBurnEvents = await CONTRACTS.avaxRenBtcContract.queryFilter(
      FILTERS.avaxBurnFilter
    );
    const avaxMintEvents = await CONTRACTS.avaxRenBtcContract.queryFilter(
      FILTERS.avaxMintFilter
    );

    return {
      avaxBurnEvents,
      avaxMintEvents,
    };
  };

  const getMaticEvents = async () => {
    const maticBurnEvents = await CONTRACTS.maticRenBtcContract.queryFilter(
      FILTERS.maticBurnFilter
    );
    const maticMintEvents = await CONTRACTS.maticRenBtcContract.queryFilter(
      FILTERS.maticMintFilter
    );

    return {
      maticBurnEvents,
      maticMintEvents,
    };
  };

  const getAllEvents = async () => {
    const { ethBurnEvents, ethMintEvents } = await getEthEvents();
    // const { arbBurnEvents, arbMintEvents } = await getArbEvents();
    // const { avaxBurnEvents, avaxMintEvents } = await getAvaxEvents();
    // const { maticBurnEvents, maticMintEvents } = await getMaticEvents();

    return [
      {
        events: ethBurnEvents,
        chain: 'eth',
        type: 'burn',
      },
      {
        events: ethMintEvents,
        chain: 'eth',
        type: 'mint',
      },
      // {
      //     events: arbBurnEvents,
      //     chain: "arb",
      //     type: "burn"
      // },
      // {
      //     events: arbMintEvents,
      //     chain: "arb",
      //     type: "mint"
      // },
      // {
      //     events: avaxBurnEvents,
      //     chain: "avax",
      //     type: "burn"
      // },
      // {
      //     events: avaxMintEvents,
      //     chain: "eth",
      //     type: "mint"
      // },
      // {
      //     events: maticBurnEvents,
      //     chain: "matic",
      //     type: "burn"
      // },
      // {
      //     events: maticMintEvents,
      //     chain: "matic",
      //     type: "mint"
      // },
    ];
  };

  return {
    getEthEvents,
    getArbEvents,
    getAvaxEvents,
    getMaticEvents,
    getAllEvents,
  };
}

export default useBridgeEvents;
