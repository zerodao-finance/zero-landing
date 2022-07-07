import useBlogs from '../../../hooks/Blogs';
import { BlogPreview } from '../../cards/BlogPreview';
import { Grid } from '../../layout/Grid';
import { Section } from '../../layout/Section';

function Blog() {
  const { blogData } = useBlogs();

  return (
    <Section vertical verticalCenter yPadding="py-8">
      <h1>Blog</h1>
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
  );
}

export { Blog };
