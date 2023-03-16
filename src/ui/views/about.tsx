import Image from 'next/image';
import Link from 'next/link';

import useWindowDimensions from '../../hooks/window-dimensions';
import { Background } from '../background';
import { CTAButton } from '../buttons/cta';
import { Section } from '../layout/section';
import {
  AboutParagraph,
  AboutSubTitle,
  AboutTitle,
  SectionTitle,
} from '../typography';

const About = () => {
  const { width } = useWindowDimensions();

  const aboutContent = [
    {
      title: "Crypto's Accessibility Challenges",
      subtitle: 'The Problem',
      content:
        'As more of the world finds DeFi, they are met with a steep barrier to entry. Today it has become simple to acquire Bitcoin, but to bring it to other ecosystems such as Ethereum or Avalanche, we usually find ourselves having to sign up for a centralized exchange.',
      contentStrong: 'The world needs decentralized interoperability.',
      img: '/assets/images/about/bridge-problem-min.jpg',
      cta: 'Read More',
      ctaLink:
        'https://zerodao.com/blog/zero-an-l0-for-eth-btc-and-xmr-powered-by-frost/',
      // cta: 'Docs',
      // ctaLink: 'https://docs.zerodao.com',
    },
    {
      title: 'Bridging with Security and Speed',
      subtitle: 'The Solution',
      content:
        "zeroDAO is the decentralized governor of the ZERO network, enabling cross-chain messaging for trade or even more complex scripting. The network is a layer 0 blockchain capable of joining many layer 1's and even layer 2 chains.",
      // 'zeroDAO is the decentralized governor of the ZERO network, enabling cross-chain transactions for trade or even more complex scripting. A network of keepers is running at all times to ensure cross-chain transactions are executed quickly, reliably, and trustlessly.',
      contentStrong: 'ZERO is designed to blur the lines between networks.',
      img: '/assets/images/about/bridge-solution-min.jpg',
      cta: 'Docs',
      ctaLink: 'https://docs.zerodao.com',
      // cta: 'Launch Bridge',
      // ctaLink: 'https://bridge.zerodao.com',
    },
  ];

  return (
    <Background color="bg-gray-900" animation={width < 1920 ? 'waves' : null}>
      <Section vertical verticalCenter yPadding="py-10 lg:py-20">
        <SectionTitle text="About" />
        {/* <div className="mb-12 md:mb-24 lg:mb-36">
          <AboutParagraph
            big
            center
            text="The ZERO network is a fully decentralized Layer 0 bridging EVM and non-EVM networks, using multiparty cryptography. The zeroDAO protocol values security, speed, and reliability above all else, ensuring users can safely and quickly move funds across chains."
          />
        </div> */}
        {aboutContent.map((el, i) => (
          <div
            className="mb-10 md:mb-15 lg:mb-20 first-of-type:xl:mb-32"
            color="!bg-[rgba(10,10,10,0.4)]"
            key={`about-${i}`}
          >
            <div
              className={`
                  ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}
                  flex flex-col-reverse lg:flex-row lg:gap-10 justify-between w-full  items-center
                `}
            >
              <div>
                <div className="mb-5">
                  <AboutSubTitle text={el.subtitle} />
                  <AboutTitle text={el.title} />
                  <AboutParagraph text={el.content} />
                  <br />
                  <AboutParagraph text={el.contentStrong} strong />
                </div>
                <Link href={el.ctaLink} passHref={true}>
                  <a>
                    <CTAButton text={el.cta} />
                  </a>
                </Link>
              </div>
              <div className="min-w-[100%] min-h-[250px] lg:min-w-[450px] lg:min-h-[300px] relative flex justify-center items-center">
                <Image
                  src={el.img}
                  alt={el.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </Section>
    </Background>
  );
};

export { About };
