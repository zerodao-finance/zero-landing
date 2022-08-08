import { useEffect, useState } from 'react';

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { ethers, utils } from 'ethers';

import { ethersProvider } from '../utils/Constants';
import { IFormattedTxProps, ITxProps } from '../utils/types/Transactions';

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
          }
        }
      `,
    });

    const shallowTransactions: Array<IFormattedTxProps> = [];
    let shallowSum = 0;

    await Promise.all(
      data.exchanges.map(async (tx: ITxProps) => {
        const { timestamp } = await ethersProvider.getBlock(Number(tx.block));

        const formattedTx = {
          timestamp: new Date(timestamp * 1000).toDateString(),
          type: tx.to === ethers.constants.AddressZero ? 'burn' : 'mint',
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
