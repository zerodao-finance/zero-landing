import useBlogs from '../../../hooks/Blogs';
import { Background } from '../../background/Background';
import { BlogPreview } from '../../cards/BlogPreview';
import { Grid } from '../../layout/Grid';
import { Section } from '../../layout/Section';
import { Spinner } from '../../loaders/Spinner';
import { SectionTitle } from '../../typography';

function Blog() {
  const { blogData, blogLoading, blogError } = useBlogs();

  return (
    <Background color="bg-gray-900">
      <Section vertical verticalCenter yPadding="py-20">
        <SectionTitle text="Blog" />
        {blogError ? (
          <p className="text-center">
            Error retrieving blog data. Please try again later.
          </p>
        ) : blogLoading ? (
          <Spinner padding="py-20" />
        ) : (
          <Grid>
            {blogData.map((el, i) => (
              <div key={i}>
                <BlogPreview
                  title={el.title}
                  date={el.pubDate}
                  desc={el.description}
                  img={el.thumbnail}
                  alt={el.title}
                  link={el.link}
                />
              </div>
            ))}
          </Grid>
        )}
      </Section>
    </Background>
  );
}

export { Blog };
