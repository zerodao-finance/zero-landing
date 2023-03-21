import { useState } from 'react';

import useSWR from 'swr';

import { IBlogDataProps } from '../types/blogs';

function useBlogs() {
  const [blogLoading, setBlogLoading] = useState(false);
  const [blogError, setBlogError] = useState(false);
  const [blogData, setBlogData] = useState<Array<IBlogDataProps>>([]);

  useSWR('blog-posts', async () => {
    setBlogLoading(true);
    try {
      const res = await fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kungfuflex'
      );
      const res2 = await fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@famousdoctrine000'
      );
      const res3 = await fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zerodaohq'
      );

      if (res.status === 200 && res2.status === 200) {
        setBlogError(false);
        const articles: Array<IBlogDataProps> = [];

        const data = await res.json();
        const data2 = await res2.json();
        const data3 = await res3.json();

        data.items.map((el: IBlogDataProps) => articles.push(el));
        data2.items.map((el: IBlogDataProps) => articles.push(el));
        data3.items.map((el: IBlogDataProps) => articles.push(el));

        setBlogData(articles);
      } else {
        setBlogError(true);
      }

      setBlogLoading(false);
    } catch (err) {
      setBlogError(true);
    }
  });

  return {
    blogData,
    blogLoading,
    blogError,
  };
}

export default useBlogs;
