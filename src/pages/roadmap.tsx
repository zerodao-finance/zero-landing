import { useEffect, useState } from 'react';

import { fetchAPI } from '../api/strapi';
import { Base } from '../ui/base';
import { Roadmap } from '../ui/views/roadmap';

const RoadmapPage = ({ roadmapItems }: any) => {
  const [statefulRoadmapItems, setStatefulRoadmapItems] =
    useState(roadmapItems);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getRoadmap = async () => {
      setIsLoading(true);
      const [roadmapRes] = await Promise.all([fetchAPI('/roadmaps')]);
      if (roadmapRes?.data) {
        const finalObj: any = {
          q1roadmapItems: [],
          q2roadmapItems: [],
          q3roadmapItems: [],
          q4roadmapItems: [],
        };
        roadmapRes?.data.forEach((el: any) => {
          if (el.attributes.launchQuarter === 'Q1')
            return finalObj.q1roadmapItems.push(el.attributes);
          if (el.attributes.launchQuarter === 'Q2')
            return finalObj.q2roadmapItems.push(el.attributes);
          if (el.attributes.launchQuarter === 'Q3')
            return finalObj.q3roadmapItems.push(el.attributes);
          if (el.attributes.launchQuarter === 'Q4')
            return finalObj.q4roadmapItems.push(el.attributes);
          return finalObj;
        });
        setStatefulRoadmapItems(finalObj);
      }
      setIsLoading(false);
    };
    getRoadmap();
  }, []);

  return (
    <Base>
      <Roadmap loading={isLoading} data={statefulRoadmapItems} />
    </Base>
  );
};

export default RoadmapPage;
