import { createContext, ReactNode, useContext } from 'react';

import useTransactions from '../hooks/Transactions';
import { IFormattedTxProps } from '../utils/types/Transactions';

// Types
type IStoreProps = {
  transactions: Array<IFormattedTxProps>;
  transactionsSum: number;
};

// Context
const AppContext = createContext<IStoreProps>({
  transactions: [],
  transactionsSum: 0,
});

// Wrapper
export function AppWrapper(props: { children: ReactNode }) {
  const { transactions, transactionsSum } = useTransactions();

  const sharedState: IStoreProps = {
    transactions,
    transactionsSum,
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
