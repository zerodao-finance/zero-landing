import { DefaultCard } from './card';
import { Label } from './label';

type IStrapiRoadmapAttr = {
  completionDate: string | null;
  createdAt: string | null;
  label: string | null;
  launchQuarter: string | null;
  publishedAt: string | null;
  stage: string | null;
  updatedAt: string | null;
  workItemTitle: string | null;
  workItemDescription: string | null;
};

export type ITimelineProps = {
  q1roadmapItems: IStrapiRoadmapAttr[];
  q2roadmapItems: IStrapiRoadmapAttr[];
  q3roadmapItems: IStrapiRoadmapAttr[];
  q4roadmapItems: IStrapiRoadmapAttr[];
};

const Timeline = ({
  q1roadmapItems,
  q2roadmapItems,
  q3roadmapItems,
  q4roadmapItems,
}: ITimelineProps) => {
  const roadmapList = [
    {
      quarter: 'Q1',
      items: q1roadmapItems,
    },
    {
      quarter: 'Q2',
      items: q2roadmapItems,
    },
    {
      quarter: 'Q3',
      items: q3roadmapItems,
    },
    {
      quarter: 'Q4',
      items: q4roadmapItems,
    },
  ];

  return (
    <ol className="relative border-l-2 border-gray-400 ml-4 lg:ml-0">
      {roadmapList.map((el) => (
        <li
          key={`${el.quarter}-row`}
          className={`mb-8 lg:mb-10 ml-8 lg:ml-10 flex gap-2 lg:gap-4 items-start flex-wrap`}
        >
          <span
            className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-neutral-100 bg-neutral-100 text-black`}
          >
            {el.quarter}
          </span>
          {el.items?.length > 0 &&
            el.items.map((item, i) => (
              <DefaultCard
                minHeight="0"
                className="w-fit max-w-lg"
                key={`${el.quarter}-card-${i}`}
              >
                <h3 className="flex items-start mb-1 text-lg font-semibold">
                  {item.workItemTitle}
                  <Label text={item.label} />
                </h3>
                {/* <time className="block mb-2 text-xs font-normal leading-none text-neutral-400">
                Published on {new Date(item.updatedAt || "").toLocaleDateString()}
                </time> */}
                <p
                  className={`block mb-2 text-xs font-normal leading-none ${
                    item.stage === 'Complete'
                      ? 'text-green-400'
                      : 'text-neutral-400'
                  }`}
                >
                  {item.stage}
                </p>
                <p className="mb-4 text-base font-normal">
                  {item.workItemDescription}
                </p>
              </DefaultCard>
            ))}
        </li>
      ))}
    </ol>
  );
};

export { Timeline };
