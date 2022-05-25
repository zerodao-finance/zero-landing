import { useAppContext } from '../../store';
import { Background } from '../background/Background';

const Charts = () => {
  const { eventsLoading, totalTransacted } = useAppContext();

  return (
    <Background color="bg-gray-800">
      <div>{eventsLoading ? "Loading" : totalTransacted}</div>
    </Background>
  );
};

export { Charts };
