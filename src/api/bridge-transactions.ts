import { useEffect, useState } from 'react';

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { ethers, utils } from 'ethers';

import {
  IChainDataProps,
  IFormattedTxProps,
  IGraphChains,
  ITxProps,
} from '../types/GraphData';
import {
  arbProvider,
  avaxProvider,
  ethersProvider,
  GRAPH_APIS,
  maticProvider,
} from '../utils/constants';

const useTransactions = () => {
  const [isError, setIsError] = useState(false);
  const [ethData, setEthData] = useState<IChainDataProps>({
    transactions: [],
    volume: 0,
    burns: 0,
    mints: 0,
  });
  const [maticData, setMaticData] = useState<IChainDataProps>({
    transactions: [],
    volume: 0,
    burns: 0,
    mints: 0,
  });
  const [avaxData, setAvaxData] = useState<IChainDataProps>({
    transactions: [],
    volume: 0,
    burns: 0,
    mints: 0,
  });
  const [arbData, setArbData] = useState<IChainDataProps>({
    transactions: [],
    volume: 0,
    burns: 0,
    mints: 0,
  });
  const [optData, setOptData] = useState<IChainDataProps>({
    transactions: [],
    volume: 0,
    burns: 0,
    mints: 0,
  });

  const getTransactions = async (chain: IGraphChains) => {
    try {
      const client = new ApolloClient({
        uri: GRAPH_APIS[chain],
        cache: new InMemoryCache(),
      });

      const { data, error } = await client.query({
        query: gql`
          query GetTransactions {
            exchanges(first: 1000, orderBy: block, orderDirection: desc) {
              id
              block
              from
              to
              amount
            }
          }
        `,
      });

      if (error) return setIsError(true);

      const shallowTransactions: Array<IFormattedTxProps> = [];
      let shallowSum = 0;
      let shallowMints = 0;
      let shallowBurns = 0;

      await Promise.all(
        data.exchanges.map(async (tx: ITxProps) => {
          let timestamp = 0;
          switch (chain) {
            case 'eth': {
              const { timestamp: ethTime } = await ethersProvider.getBlock(
                Number(tx.block)
              );
              timestamp = ethTime;
              break;
            }
            case 'matic': {
              const { timestamp: maticTime } = await maticProvider.getBlock(
                Number(tx.block)
              );
              timestamp = maticTime;
              break;
            }
            case 'avax': {
              const { timestamp: avaxTime } = await avaxProvider.getBlock(
                Number(tx.block)
              );
              timestamp = avaxTime;
              break;
            }
            case 'arb': {
              const { timestamp: arbTime } = await arbProvider.getBlock(
                Number(tx.block)
              );
              timestamp = arbTime;
              break;
            }
            case 'opt': {
              const { timestamp: arbTime } = await arbProvider.getBlock(
                Number(tx.block)
              );
              timestamp = arbTime;
              break;
            }
            default:
              break;
          }

          const formattedTx = {
            timestamp:
              timestamp !== 0
                ? new Date(timestamp * 1000).toDateString()
                : 'N/A',
            type: tx.to === ethers.constants.AddressZero ? 'burn' : 'mint',
            amount: utils.formatUnits(tx.amount, 8),
            to: tx.to,
            from: tx.from,
            block: tx.block,
            transactionHash: tx.id,
            chain,
          };

          // sum up mints and burns
          if (formattedTx.type === 'burn') shallowBurns += 1;
          if (formattedTx.type === 'mint') shallowMints += 1;

          shallowTransactions.push(formattedTx);
          return (shallowSum += parseFloat(formattedTx.amount));
        })
      );

      switch (chain) {
        case 'eth':
          return setEthData({
            transactions: shallowTransactions,
            volume: shallowSum,
            burns: shallowBurns,
            mints: shallowMints,
          });
        case 'matic':
          return setMaticData({
            transactions: shallowTransactions,
            volume: shallowSum,
            burns: shallowBurns,
            mints: shallowMints,
          });
        case 'avax':
          return setAvaxData({
            transactions: shallowTransactions,
            volume: shallowSum,
            burns: shallowBurns,
            mints: shallowMints,
          });
        case 'arb':
          return setArbData({
            transactions: shallowTransactions,
            volume: shallowSum,
            burns: shallowBurns,
            mints: shallowMints,
          });
        case 'opt':
          return setOptData({
            transactions: shallowTransactions,
            volume: shallowSum,
            burns: shallowBurns,
            mints: shallowMints,
          });
        default:
          return;
      }
    } catch (err) {
      setIsError(true);
    }
  };

  useEffect(() => {
    getTransactions('eth');
    getTransactions('matic');
    getTransactions('avax');
    getTransactions('arb');
    getTransactions('opt');
  }, []);

  return {
    isLoading:
      ethData.transactions.length === 0 &&
      maticData.transactions.length === 0 &&
      avaxData.transactions.length === 0 &&
      arbData.transactions.length === 0 &&
      !isError,
    isError,
    getTransactions,
    data: {
      eth: ethData,
      matic: maticData,
      avax: avaxData,
      arb: arbData,
      opt: optData,
      all: {
        volume:
          ethData.volume +
          maticData.volume +
          avaxData.volume +
          arbData.volume +
          optData.volume,
        transactions: ethData.transactions.concat(
          maticData.transactions,
          avaxData.transactions,
          arbData.transactions,
          optData.transactions
        ),
        mints:
          ethData.mints +
          maticData.mints +
          avaxData.mints +
          arbData.mints +
          optData.mints,
        burns:
          ethData.burns +
          maticData.burns +
          avaxData.burns +
          arbData.mints +
          optData.burns,
      },
    },
  };
};

export default useTransactions;
