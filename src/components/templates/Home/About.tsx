// Layout
// Components
import Image from 'next/image';

import { Background } from '../../background/Background';
import { CTAButton } from '../../buttons/CTA';
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
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      img: '',
      cta: 'Docs',
      ctaClick: () => {},
    },
    {
      title: 'Bridging and Fiat-to-Crypto Ramps',
      subtitle: 'The Solution',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      img: '',
      cta: 'Launch Bridge',
      ctaClick: () => {},
    },
    {
      title: 'All-in-one Decentralized Solution',
      subtitle: 'The Ideal',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      img: '',
      cta: 'Launch Bridge',
      ctaClick: () => {},
    },
  ];

  return (
    <>
      <Background>
        <Section vertical verticalCenter yPadding="pt-10 lg:pt-20">
          <SectionTitle text="About" />
          {aboutContent.map((el, i) => (
            <div
              className={`
                ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}
                flex flex-col md:flex-row gap-10 lg:gap-20 justify-between w-full mb-10 md:mb-20 lg:mb-32 items-center
              `}
              key={`about-${i}`}
            >
              <div>
                <div className="mb-5">
                  <AboutSubTitle text={el.subtitle} />
                  <AboutTitle text={el.title} />
                  <AboutParagraph text={el.content} />
                </div>
                <CTAButton text={el.cta} />
              </div>
              <div className="min-w-[300px] flex justify-center items-center">
                <Image
                  src="/assets/3d/ZeroLogo3D.png"
                  alt="image"
                  height="300"
                  width="300"
                />
              </div>
            </div>
          ))}
        </Section>
      </Background>
    </>
  );
};

export { About };
