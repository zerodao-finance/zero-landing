import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../components';
import { Section } from '../layout';
import { Background } from '../layout/background';
import * as T from '../typography';

const About = () => {
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
    },
    {
      title: 'Bridging with Security and Speed',
      subtitle: 'The Solution',
      content:
        "zeroDAO is the decentralized governor of the ZERO network, enabling cross-chain messaging for trade or even more complex scripting. The network is a layer 0 blockchain capable of joining many layer 1's and even layer 2 chains.",
      contentStrong: 'ZERO is designed to blur the lines between networks.',
      img: '/assets/images/about/bridge-solution-min.jpg',
      cta: 'Docs',
      ctaLink: 'https://docs.zerodao.com',
    },
  ];

  return (
    <Background color="bg-gray-900">
      <Section vertical verticalCenter yPadding="py-10 lg:py-20" title="About">
        {aboutContent.map((el, i) => (
          <div
            className="mb-16 md:mb-20 lg:mb-24 last-of-type:mb-0"
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
                  <T.SubTitle text={el.subtitle} />
                  <T.Title text={el.title} />
                  <T.Paragraph text={el.content} />
                  <br />
                  <T.Paragraph text={el.contentStrong} strong big />
                </div>
                <Link href={el.ctaLink} passHref={true}>
                  <a>
                    <Button type="cta">{el.cta}</Button>
                  </a>
                </Link>
              </div>
              <div className="min-w-[100%] min-h-[250px] lg:min-w-[450px] lg:min-h-[300px] relative flex justify-center items-center shadow-md shadow-black">
                <Image
                  src={el.img}
                  alt={el.title || 'zerodao'}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
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
