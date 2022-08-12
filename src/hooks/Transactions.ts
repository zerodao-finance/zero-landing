import { useEffect, useState } from 'react';

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { ethers, utils } from 'ethers';

import { ethersProvider } from '../utils/Constants';
import { IFormattedTxProps, ITxProps } from '../utils/types/Transactions';

const useTransactions = () => {
  const [transactions, setTransactions] = useState<Array<any>>([]);
  const [transactionsSum, setTransactionsSum] = useState(0);
  const [mintAmount, setMintAmount] = useState(0);
  const [burnAmount, setBurnAmount] = useState(0);
  const [isError, setIsError] = useState(false);

  const getEthTransactions = async () => {
    try {
      const client = new ApolloClient({
        uri: 'https://api.thegraph.com/subgraphs/name/yoyobojo/zerodao-renbtc',
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

      if (error) setIsError(true);

      const shallowTransactions: Array<IFormattedTxProps> = [];
      let shallowSum = 0;
      let shallowMints = 0;
      let shallowBurns = 0;

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

          // sum up mints and burns
          if (formattedTx.type === 'burn') shallowBurns += 1;
          if (formattedTx.type === 'mint') shallowMints += 1;

          shallowTransactions.push(formattedTx);
          return (shallowSum += parseFloat(formattedTx.amount));
        })
      );

      setTransactions(shallowTransactions);
      setTransactionsSum(shallowSum);
      setBurnAmount(shallowBurns);
      setMintAmount(shallowMints);
    } catch (err) {
      setIsError(true);
    }
  };

  useEffect(() => {
    getEthTransactions();
  }, []);

  return {
    transactions,
    transactionsSum,
    getEthTransactions,
    burnAmount,
    mintAmount,
    isError,
  };
};

export default useTransactions;
