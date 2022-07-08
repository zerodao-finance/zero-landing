import useBlogs from '../../../hooks/Blogs';
import { Background } from '../../background/Background';
import { BlogPreview } from '../../cards/BlogPreview';
import { Grid } from '../../layout/Grid';
import { Section } from '../../layout/Section';
import { SectionTitle } from '../../typography';

function Blog() {
  const { blogData } = useBlogs();

  return (
    <Background color="bg-gray-900">
      <Section vertical verticalCenter yPadding="py-10">
        <SectionTitle text="Blog" />
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
      </Section>
    </Background>
  );
}

export { Blog };
