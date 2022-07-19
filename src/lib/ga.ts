// log the pageview with their URL
export const pageview = (url: string) => {
  if (typeof window !== 'undefined') {
    window?.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    });
  }
};

// log specific events happening.
export const event = ({ action, params }: any) => {
  if (typeof window !== 'undefined') {
    window?.gtag('event', action, params);
  }
};
