import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
} from 'react';

import useTransactions from '../hooks/Transactions';
import useZeroAnalytics from '../hooks/ZeroAnalytics';

// Types
type IStoreProps = {
  totalTransacted: number;
  pastEvents: Array<any>;
  eventsLoading: boolean;
  firstLogin: boolean;
  setFirstLogin?: Dispatch<SetStateAction<boolean>>;
  transactions: Array<any>; // TODO: implement interface for transactions
};

// Context
const AppContext = createContext<IStoreProps>({
  totalTransacted: 0,
  pastEvents: [],
  eventsLoading: false,
  firstLogin: true,
  transactions: [],
});

// Wrapper
export function AppWrapper(props: { children: ReactNode }) {
  const { firstLogin, totalTransacted, pastEvents, eventsLoading } =
    useZeroAnalytics();

  const { transactions } = useTransactions();

  const sharedState: IStoreProps = {
    totalTransacted,
    pastEvents,
    eventsLoading,
    firstLogin,
    transactions,
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
