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

    console.log(finalBlogList);
    setBlogPosts(finalBlogList);
  }, [articles]);

  return (
    <Background color="bg-gray-900">
      <Section vertical verticalCenter yPadding="py-20">
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
                  <MediumBlogPreview
                    title={el.title}
                    date={el.formattedDate}
                    desc={el.description}
                    img={el.thumbnail}
                    alt={el.title}
                    link={el.link}
                    id={String(i + 1)}
                  />
                );
              }
              return (
                <StrapiBlogPreview article={el} key={el.attributes.slug} />
              );
            })}
        </Grid>
      </Section>
    </Background>
  );
}

export { Blog };
