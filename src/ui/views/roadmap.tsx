import { useWindowDimensions } from '../../hooks';
import { Background } from '../background';
import { Section } from '../layout';

const Roadmap = () => {
  const { width } = useWindowDimensions();

  return (
    <Background color="bg-gray-900" animation={width < 1920 ? 'waves' : null}>
      <Section h1Title title="Roadmap" vertical style="!pt-28">
        <span>something here...</span>
      </Section>
    </Background>
  );
};

export { Roadmap };
