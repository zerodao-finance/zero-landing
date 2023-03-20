import { DefaultCard } from './card';

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

  const renderLabelClass = (label?: string | null) => {
    const baseClass =
      'bg-green-100 text-brand-900 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3';
    let customClass = '';
    if (label) {
      switch (label.toLowerCase()) {
        case 'network':
          customClass = 'bg-green-100 text-brand-900';
          break;
        case 'nft':
          customClass = 'bg-blue-100 text-blue-500';
          break;
        case 'token':
          customClass = 'bg-yellow-100 text-yellow-600';
          break;
        default:
          return baseClass;
      }
      return `${baseClass} ${customClass}`;
    }
    return baseClass;
  };

  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-4 lg:ml-0">
      {roadmapList.map((el) => (
        <li
          key={`${el.quarter}-row`}
          className={`mb-8 lg:mb-10 ml-8 lg:ml-10 flex gap-2 lg:gap-4 items-start flex-wrap`}
        >
          <span
            className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white bg-white text-black`}
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
                <h3 className="flex items-center mb-1 text-lg font-semibold">
                  {item.workItemTitle}
                  <span className={renderLabelClass(item.label)}>
                    {item.label}
                  </span>
                </h3>
                {/* <time className="block mb-2 text-xs font-normal leading-none text-neutral-400">
                Published on {new Date(item.updatedAt || "").toLocaleDateString()}
              </time> */}
                <p className="block mb-2 text-xs font-normal leading-none text-neutral-400">
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
