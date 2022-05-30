import { createContext, ReactNode, useContext, useEffect } from 'react';

import useZeroAnalytics from '../hooks/ZeroAnalytics';

// Types
type IStoreProps = {
  totalTransacted: number;
  pastEvents: Array<any>;
  eventsLoading: boolean;
};

// Context
const AppContext = createContext<IStoreProps>({
  totalTransacted: 0,
  pastEvents: [],
  eventsLoading: false,
});

// Wrapper
export function AppWrapper(props: { children: ReactNode }) {
  const { getPastEvents, totalTransacted, pastEvents, eventsLoading } =
    useZeroAnalytics();

  useEffect(() => {
    getPastEvents();
  }, []);

  const sharedState: IStoreProps = {
    totalTransacted,
    pastEvents,
    eventsLoading,
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
