import { useWindowDimensions } from '../../hooks';
import { ITimelineProps, Timeline } from '../components';
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
      >
        <Timeline {...data} loading={loading} horizontal={width > 1300} />
      </Section>
    </Background>
  );
};

export { Roadmap };
