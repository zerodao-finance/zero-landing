import { useWindowDimensions } from '../../hooks';
import { ITimelineProps, Spinner, Timeline } from '../components';
import { Section } from '../layout';
import { Background } from '../layout/background';

type IRoadmapProps = {
  loading: boolean;
  data: ITimelineProps;
};

const Roadmap = ({ data, loading = true }: IRoadmapProps) => {
  const { width } = useWindowDimensions();

  return (
    <Background color="bg-gray-900" animation={width < 1920 ? 'waves' : null}>
      <Section
        title="Roadmap"
        description="Our 2023 quarterly breakdown of the DAO's developments"
        h1Title
        vertical
        style="!pt-28"
      >
        {loading ? (
          <div className="h-[42vh] flex justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <Timeline {...data} />
        )}
      </Section>
    </Background>
  );
};

export { Roadmap };