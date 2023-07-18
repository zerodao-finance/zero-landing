import { DefaultCard } from './card';
import { Label } from './label';
import { RedirectLink } from './link';

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
  link: string | null;
};

export type ITimelineProps = {
  q1roadmapItems: IStrapiRoadmapAttr[];
  q2roadmapItems: IStrapiRoadmapAttr[];
  q3roadmapItems: IStrapiRoadmapAttr[];
  q4roadmapItems: IStrapiRoadmapAttr[];
  horizontal: boolean;
  loading?: boolean;
};

const mockRoadmapItem: IStrapiRoadmapAttr = {
  completionDate: null,
  createdAt: '',
  label: 'ZERODAO',
  launchQuarter: '',
  link: null,
  publishedAt: '',
  stage: 'loading',
  updatedAt: '',
  workItemDescription: null,
  workItemTitle: 'ZERODAO',
};

const Timeline = ({
  q1roadmapItems,
  q2roadmapItems,
  q3roadmapItems,
  q4roadmapItems,
  horizontal,
  loading,
}: ITimelineProps) => {
  const roadmapList = !loading
    ? [
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
      ]
    : [1, 2, 3, 4].map((el) => ({
        quarter: `Q${el}`,
        items: Array(4).fill(mockRoadmapItem),
      }));

  const determineStageColor = (stage: string | null) => {
    if (stage) {
      switch (stage) {
        case 'loading':
          return 'text-brand-black';
        case 'Complete':
          return 'text-green-400';
        case 'In-Progress':
          return 'text-yellow-400';
        default:
          return 'text-neutral-400';
      }
    }
    return 'text-neutral-400';
  };

  if (horizontal) {
    return (
      <ol className="grid grid-cols-4 divide-x-4 divide-neutral-900 mt-12">
        {roadmapList.map((el, index) => (
          <li
            key={`${el.quarter}-row-${index}`}
            className={`flex flex-col gap-2 px-3 relative`}
          >
            <span
              className={`text-center text-xl rounded-t-lg font-semibold relative -top-12 mb-6`}
            >
              {el.quarter}
            </span>
            {el.items?.length > 0 &&
              el.items.map((item, i) => (
                <DefaultCard
                  minHeight="0"
                  className="w-full max-w-lg relative -top-16"
                  key={`${el.quarter}-card-${i}`}
                  loading={loading}
                >
                  <h3 className="flex items-start mb-1 text-lg font-semibold justify-between">
                    {item.workItemTitle}
                    <Label text={item.label} />
                  </h3>
                  {item.completionDate && (
                    <time className="block mb-2 text-xs font-normal leading-none text-neutral-400">
                      Launch Date:{' '}
                      {new Date(item.completionDate || '').toLocaleDateString()}
                    </time>
                  )}
                  <p
                    className={`block mb-2 text-xs font-normal leading-none ${determineStageColor(
                      item.stage
                    )}`}
                  >
                    {item.stage}
                  </p>
                  {item.workItemDescription && (
                    <p className="mb-4 text-base font-normal">
                      {item.workItemDescription}
                    </p>
                  )}
                  {item.link && <RedirectLink link={item.link} />}
                </DefaultCard>
              ))}
          </li>
        ))}
      </ol>
    );
  }
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
                className={`w-full sm:w-fit max-w-lg`}
                key={`${el.quarter}-card-${i}`}
                loading={loading}
              >
                <h3 className="flex items-start mb-1 text-lg font-semibold">
                  {item.workItemTitle}
                  <Label text={item.label} />
                </h3>
                {item.completionDate && (
                  <time className="block mb-2 text-xs font-normal leading-none text-neutral-400">
                    Launch Date:{' '}
                    {new Date(item.completionDate || '').toLocaleDateString()}
                  </time>
                )}
                <p
                  className={`block mb-2 text-xs font-normal leading-none ${determineStageColor(
                    item.stage
                  )}`}
                >
                  {item.stage}
                </p>
                {item.workItemDescription && (
                  <p className="mb-4 text-base font-normal">
                    {item.workItemDescription}
                  </p>
                )}
                {item.link && <RedirectLink link={item.link} />}
              </DefaultCard>
            ))}
        </li>
      ))}
    </ol>
  );
};

export { Timeline };
