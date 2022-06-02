import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

import useZeroAnalytics from '../hooks/ZeroAnalytics';

// Types
type IStoreProps = {
  totalTransacted: number;
  pastEvents: Array<any>;
  eventsLoading: boolean;
  firstLogin: boolean;
  setFirstLogin?: Dispatch<SetStateAction<boolean>>;
};

// Context
const AppContext = createContext<IStoreProps>({
  totalTransacted: 0,
  pastEvents: [],
  eventsLoading: false,
  firstLogin: true,
});

// Wrapper
export function AppWrapper(props: { children: ReactNode }) {
  const { getPastEvents, totalTransacted, pastEvents, eventsLoading } =
    useZeroAnalytics();

  const [firstLogin, setFirstLogin] = useState(true);

  useEffect(() => {
    getPastEvents();
  }, []);

  const sharedState: IStoreProps = {
    totalTransacted,
    pastEvents,
    eventsLoading,
    firstLogin,
    setFirstLogin,
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
