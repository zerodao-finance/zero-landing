import { useEffect, useState } from 'react';

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { utils } from 'ethers';

import { ethersProvider } from '../utils/Constants';

const useTransactions = () => {
  const [transactions, setTransactions] = useState<Array<any>>([]);
  const [transactionsSum, setTransactionsSum] = useState(0);

  const getEthTransactions = async () => {
    const client = new ApolloClient({
      uri: 'https://api.thegraph.com/subgraphs/name/yoyobojo/zerodao-renbtc',
      cache: new InMemoryCache(),
    });

    const { data } = await client.query({
      query: gql`
        query GetTransactions {
          exchanges(first: 1000, orderBy: block, orderDirection: desc) {
            id
            block
            from
            to
            amount
            block
          }
        }
      `,
    });

    // TODO: Implement interface
    const shallowTransactions: Array<any> = [];
    let shallowSum = 0;

    // TODO: Implement interface
    await Promise.all(
      data.exchanges.map(async (tx: any) => {
        const { timestamp } = await ethersProvider.getBlock(Number(tx.block));

        const formattedTx = {
          timestamp: new Date(timestamp * 1000).toDateString(),
          // TODO: change address to a "zeroAddress"
          type:
            tx.to === '0x0000000000000000000000000000000000000000'
              ? 'burn'
              : 'mint',
          amount: utils.formatUnits(tx.amount, 8),
          to: tx.to,
          from: tx.from,
          block: tx.block,
          transactionHash: tx.id,
        };

        shallowTransactions.push(formattedTx);
        return (shallowSum += parseFloat(formattedTx.amount));
      })
    );

    setTransactions(shallowTransactions);
    setTransactionsSum(shallowSum);
  };

  useEffect(() => {
    getEthTransactions();
  }, []);

  return {
    transactions,
    transactionsSum,
    getEthTransactions,
  };
};

export default useTransactions;
