import { createContext, ReactNode, useContext } from 'react';

import useTransactions from '../hooks/Transactions';
import { IFormattedTxProps } from '../utils/types/Transactions';

// Types
type IStoreProps = {
  transactions: Array<IFormattedTxProps>;
  transactionsSum: number;
  burns: number;
  mints: number;
};

// Context
const AppContext = createContext<IStoreProps>({
  transactions: [],
  transactionsSum: 0,
  burns: 0,
  mints: 0,
});

// Wrapper
export function AppWrapper(props: { children: ReactNode }) {
  const { transactions, transactionsSum, burnAmount, mintAmount } =
    useTransactions();

  const sharedState: IStoreProps = {
    transactions,
    transactionsSum,
    burns: burnAmount,
    mints: mintAmount,
  };

  return (
    <AppContext.Provider value={sharedState}>
      {props.children}
    </AppContext.Provider>
  );
}

// Independent
export function useAppContext() {
  return useContext(AppContext);
}
