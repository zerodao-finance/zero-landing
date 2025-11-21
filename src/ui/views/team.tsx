import Image from 'next/image';

import { Section } from '../layout';
import { Background } from '../layout/background';
import * as T from '../typography';

const Team = () => {
  const teamMembers = [
    {
      name: 'Raymond "Flex" Pulver',
      image: '/rwp.jpg',
    },
    {
      name: 'Angello "ALo Songs" Lazar',
      image: '/alo.png',
    },
  ];

  return (
    <Background color="bg-gray-900">
      <Section vertical verticalCenter yPadding="py-10 lg:py-20" title="Team">
        <div className="mb-5 text-center">
          <T.SubTitle text={'Meet the Team'} />
          <T.Title text={'The People Behind ZERO'} />
        </div>
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 justify-center items-center mt-8">
          {teamMembers.map((member, i) => (
            <div key={`team-${i}`} className="flex flex-col items-center gap-4">
              <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg shadow-black">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <T.Paragraph text={member.name} strong big />
            </div>
          ))}
        </div>
      </Section>
    </Background>
  );
};

export { Team };
