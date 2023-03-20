import { useWindowDimensions } from '../../hooks';
import { ITimelineProps, Timeline } from '../components';
import { Section } from '../layout';
import { Background } from '../layout/background';

type IRoadmapProps = {
  loading: boolean;
  data: ITimelineProps;
};

const Roadmap = ({ data }: IRoadmapProps) => {
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
        <Timeline {...data} />
      </Section>
    </Background>
  );
};

export { Roadmap };
