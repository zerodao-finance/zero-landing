import { useState } from 'react';

import useSWR from 'swr';

import { IBlogDataProps } from '../utils/Types';

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

  const blogImgSelector = (title: string) => {
    switch (title.toLowerCase()) {
      case '10 minutes or less: cash out usdc to debit card easy':
        return '/assets/images/blog/10-min-or-less-min.jpeg';
      case 'zerodao — p2p cross-chain':
        return '/assets/images/blog/p2p-cross-chain-min.jpg';
      default:
        return '/assets/images/blog/p2p-cross-chain-min.jpg';
    }
  };

  return {
    blogData,
    blogLoading,
    blogError,
    blogImgSelector,
  };
}

export default useBlogs;
