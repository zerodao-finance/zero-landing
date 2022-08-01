import { useEffect, useState } from 'react';

import { BLOGS } from '../../utils/Blogs';
import { Background } from '../background/Background';
import { MediumBlogPreview } from '../cards/MediumBlogPreview';
import { StrapiBlogPreview } from '../cards/StrapiBlogPreview';
import { Grid } from '../layout/Grid';
import { Section } from '../layout/Section';
import { SectionTitle } from '../typography';

function Blog({ articles }: any) {
  const [blogPosts, setBlogPosts] = useState<any>();

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
      <Section vertical verticalCenter yPadding="pb-20 pt-28">
        <SectionTitle text="Blog" />
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
                  <div key={i}>
                    <MediumBlogPreview
                      title={el.title}
                      date={el.formattedDate}
                      desc={el.description}
                      img={el.thumbnail}
                      alt={el.title}
                      link={el.link}
                      id={String(i + 1)}
                    />
                  </div>
                );
              }
              return (
                <div key={i}>
                  <StrapiBlogPreview article={el} key={el.attributes.slug} />
                </div>
              );
            })}
        </Grid>
      </Section>
    </Background>
  );
}

export { Blog };
