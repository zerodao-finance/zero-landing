import { Background } from '../background/Background';
import { DefaultCard } from '../cards/Default';
import { Grid } from '../layout/Grid';
import { Section } from '../layout/Section';
import { AboutTitle, SectionTitle } from '../typography';

const Features = () => {
  return (
    <Background color="bg-gray-900">
      <Section vertical verticalCenter>
        <SectionTitle text="Features" />
        <AboutTitle text="Chains Integrated" style="!mb-5" />
        <Grid>
          <DefaultCard minHeight="min-h-auto">Arbitrum</DefaultCard>
          <DefaultCard minHeight="min-h-auto">Avalanche</DefaultCard>
          <DefaultCard minHeight="min-h-auto">Polygon</DefaultCard>
        </Grid>
      </Section>
    </Background>
  );
};

export { Features };
