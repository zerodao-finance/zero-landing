// Layout
// Components
import Image from 'next/image';
import Link from 'next/link';

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
        "There are three pain-staking problems that all crypto users when interacting with web3-enabled applications. Firstly, bitcoin is percieved to be a store of value, much like our bank account, but it's increasingly difficult to use in web3. Secondly, when moving assets from one network to another, it requires the network's native currency send any transaction in order to cover the network's gas fees. Lastly, we are all terrified of the security breaches that many protocols accidently allow for. Let's face it, the crypto community is tired and annoyed of all this.",
      img: '/assets/images/bridge-problem.png',
      cta: 'Docs',
      ctaLink: 'https://docs.zerodao.com',
    },
    {
      title: 'Bridging with Security and Speed',
      subtitle: 'The Solution',
      content:
        "While there are a few solutions on the market, none of them cover these two prominenet aspects of moving value around the blockchain quickly and without worry. This is why we launched the zeroBRIDGE. zeroBRIDGE is built on top of RenVM to be secure, fast, and gasless. That's right, gasless. We want the crypto community to seamlessly move money around various blockchains without having to worry about holding the native currency in that wallet to bridge or how to get BTC to a smart-contract enabled network. We currently have Ethereum, Avalanche and Polygon integrated with Bitcoin where you can either transfer Bitcoin into or out of those networks.",
      img: '/assets/images/bridge-solution.png',
      cta: 'Launch Bridge',
      ctaLink: 'https://bridge.zerodao.com',
    },
  ];

  return (
    <>
      <Background color="bg-gray-900">
        <Section vertical verticalCenter yPadding="pt-10 lg:pt-20">
          <SectionTitle text="About" />
          {aboutContent.map((el, i) => (
            <div
              className={`
                ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}
                ${i === 1 ? 'mt-10' : ''}
                flex flex-col-reverse md:flex-row gap-10 xl:gap-20 justify-between w-full mb-10 md:mb-20 lg:mb-32 items-center
              `}
              key={`about-${i}`}
            >
              <div>
                <div className="mb-5">
                  <AboutSubTitle text={el.subtitle} />
                  <AboutTitle text={el.title} />
                  <AboutParagraph text={el.content} />
                </div>
                <Link href={el.ctaLink} passHref={true}>
                  <a>
                    <CTAButton text={el.cta} />
                  </a>
                </Link>
              </div>
              <div className="min-w-[300px] min-h-[300px] relative flex justify-center items-center">
                <Image
                  src={el.img}
                  alt={el.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
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
