import { useEffect, useState } from 'react';

import { BLOGS } from '../../utils/medium-blogs';
import { Background } from '../background';
import { Button, MediumBlogPreview, StrapiBlogPreview } from '../components';
import { Grid, Section } from '../layout';

function Blog({ articles, withShowMore }: any) {
  const [blogPosts, setBlogPosts] = useState<any>([]);
  const [showFew, setShowFew] = useState(true);

  useEffect(() => {
    const withMediumType = BLOGS.map((obj) => {
      const cleanDate = new Date(obj.pubDate).toLocaleString();
      return {
        ...obj,
        source: 'medium',
        formattedDate: cleanDate,
      };
    });
    const withStrapiType = articles
      ? articles.map((obj: any) => {
          const cleanDate = new Date(
            obj.attributes.publishedAt
          ).toLocaleString();
          return {
            ...obj,
            source: 'strapi',
            formattedDate: cleanDate,
          };
        })
      : [];

    const finalBlogList: any = withMediumType.concat(withStrapiType);

    setBlogPosts(finalBlogList);
  }, [articles]);

  return (
    <Background>
      <Section
        vertical
        verticalCenter
        yPadding="pb-20 pt-28"
        h1Title
        title="Blog"
      >
        <Grid>
          {(blogPosts || [])
            .sort(
              (a: any, b: any) =>
                new Date(b.formattedDate).getTime() -
                new Date(a.formattedDate).getTime()
            )
            .map((el: any, i: number) => {
              if (el.source === 'medium') {
                return (
                  <MediumBlogPreview
                    title={el.title}
                    date={el.formattedDate}
                    desc={el.description}
                    img={el.thumbnail}
                    alt={el.title}
                    link={el.link}
                    id={String(i + 1)}
                    key={i}
                  />
                );
              }
              return (
                <StrapiBlogPreview article={el} key={el.attributes.slug} />
              );
            })
            .slice(0, showFew && withShowMore ? 6 : blogPosts.length)}
        </Grid>
        {withShowMore && (
          <Button
            secondary
            onClick={() => setShowFew(!showFew)}
            className="mt-10"
          >
            {showFew ? 'Show More' : 'Show Less'}
          </Button>
        )}
      </Section>
    </Background>
  );
}

export { Blog };
