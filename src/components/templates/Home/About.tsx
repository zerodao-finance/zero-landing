// Layout
// Components
import Image from 'next/image';

import { Background } from '../../background/Background';
import { Grid } from '../../layout/Grid';
import { Section } from '../../layout/Section';
import {
  AboutParagraph,
  AboutSubTitle,
  AboutTitle,
  SectionTitle,
} from '../../typography';

const About = () => {
  const aboutContent = [
    {
      title: "Crypto's Accessibility Challenges",
      subtitle: 'The Problem',
      content: '',
      img: '',
      cta: '',
    },
    {
      title: 'Bridging and Fiat-to-Crypto Ramps',
      subtitle: 'The Solution',
      content: '',
      img: '',
      cta: '',
    },
    {
      title: 'All-in-one Decentralized Solution',
      subtitle: 'The Ideal',
      content: '',
      img: '',
      cta: '',
    },
  ];

  return (
    <>
      <Background>
        <Section vertical verticalCenter yPadding="py-10 pt-20">
          <SectionTitle text="About" />
          {/* <Grid cols="grid-cols-1 lg:grid-cols-2"> */}
          {aboutContent.map((el, i) => (
            <Grid cols="grid-cols-1 lg:grid-cols-2" key={`about-${i}`}>
              <div>
                <AboutSubTitle text={el.subtitle} />
                <AboutTitle text={el.title} />
                <AboutParagraph text={el.content} />
                <button>CTA</button>
              </div>
              <div>
                <Image
                  src="/assets/3d/ZeroLogo3D.png"
                  alt="image"
                  height="300"
                  width="300"
                />
              </div>
            </Grid>
          ))}
          {/* </Grid> */}
        </Section>
      </Background>
    </>
  );
};

export { About };
