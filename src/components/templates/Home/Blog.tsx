import useBlogs from '../../../hooks/Blogs';
import { Background } from '../../background/Background';
import { BlogPreview } from '../../cards/BlogPreview';
import { Grid } from '../../layout/Grid';
import { Section } from '../../layout/Section';

function Blog() {
  const { blogData } = useBlogs();

  return (
    <Background color="bg-gray-900">
      <Section vertical verticalCenter yPadding="py-10">
        <h1 className="text-xl uppercase font-bold mb-10">Blog</h1>
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
