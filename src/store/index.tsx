import { createContext, ReactNode, useContext } from 'react';

import useTransactions from '../hooks/Transactions';
import { IChainDataProps } from '../utils/types/GraphData';

// Types
type IStoreProps = {
  data: {
    eth: IChainDataProps;
    avax: IChainDataProps;
    matic: IChainDataProps;
    all: IChainDataProps;
  };
  isLoading: boolean;
  isError: boolean;
};

// Context
const AppContext = createContext<IStoreProps>({
  data: {
    eth: {
      transactions: [],
      volume: 0,
      burns: 0,
      mints: 0,
    },
    avax: {
      transactions: [],
      volume: 0,
      burns: 0,
      mints: 0,
    },
    matic: {
      transactions: [],
      volume: 0,
      burns: 0,
      mints: 0,
    },
    all: {
      transactions: [],
      volume: 0,
      burns: 0,
      mints: 0,
    },
  },
  isLoading: false,
  isError: false,
});

// Wrapper
export function AppWrapper(props: { children: ReactNode }) {
  const { data, isError, isLoading } = useTransactions();

  const sharedState: IStoreProps = {
    data,
    isLoading,
    isError,
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
