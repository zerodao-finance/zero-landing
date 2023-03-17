import { useEffect, useState } from 'react';

import { fetchAPI } from '../api/strapi';
import { Base } from '../ui/base';
import { Roadmap } from '../ui/views/roadmap';

// TODO: implement type

const RoadmapPage = ({ roadmapItems }: any) => {
  const [statefulRoadmapItems, setStatefulRoadmapItems] =
    useState(roadmapItems);

  useEffect(() => {
    const getRoadmap = async () => {
      const [roadmapRes] = await Promise.all([fetchAPI('/roadmaps')]);
      if (roadmapRes?.data) setStatefulRoadmapItems(roadmapRes.data);
    };
    getRoadmap();
  }, []);

  console.log('roadmap', statefulRoadmapItems);

  return (
    <Base withNav>
      <Roadmap />
    </Base>
  );
};

export default RoadmapPage;
