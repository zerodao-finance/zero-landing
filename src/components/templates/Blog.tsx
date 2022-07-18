import { BLOGS } from '../../utils/Blogs';
import { Background } from '../background/Background';
import { MediumBlogPreview } from '../cards/MediumBlogPreview';
import { StrapiBlogPreview } from '../cards/StrapiBlogPreview';
import { Grid } from '../layout/Grid';
import { Section } from '../layout/Section';
import { SectionTitle } from '../typography';

function Blog({ articles }: any) {
  return (
    <Background color="bg-gray-900">
      <Section vertical verticalCenter yPadding="py-20">
        <SectionTitle text="Blog" />
        {/* {blogError ? (
          <p className="text-center">
            Error retrieving blog data. Please try again later.
          </p>
        ) : blogLoading ? (
          <Spinner padding="py-20" />
        ) : ( */}
        <Grid>
          {BLOGS.map((el, i) => (
            <div key={i}>
              <MediumBlogPreview
                title={el.title}
                date={el.pubDate}
                desc={el.description}
                img={el.thumbnail}
                alt={el.title}
                link={el.link}
                id={String(i + 1)}
              />
            </div>
          ))}
          {articles.map((article: any) => (
            <StrapiBlogPreview
              article={article}
              key={article.attributes.slug}
            />
          ))}
        </Grid>
        {/* )} */}
      </Section>
    </Background>
  );
}

export { Blog };
