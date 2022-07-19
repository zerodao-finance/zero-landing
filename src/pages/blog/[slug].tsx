import Image from 'next/image';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Section } from '../../components/layout/Section';
import { Base } from '../../components/templates/Base';
import useWindowDimensions from '../../hooks/WindowDimensions';
import { fetchAPI } from '../../lib/strapi/api';
import { getStrapiMedia } from '../../lib/strapi/media';
import style from '../../styles/markdown-styles.module.css';

const Article = ({ article }: any) => {
  const { width } = useWindowDimensions();

  return (
    <Base
      withNav
      title={`zeroDAO - ${article.attributes.title}`}
      description={article.attributes.description}
    >
      <Section vertical>
        <div className="mb-1">
          <h1 className="text-3xl font-bold">{article.attributes.title}</h1>
        </div>
        <div>
          <p>Author: {article.attributes.author.data.attributes.name}</p>
          <p>
            Published On:{' '}
            {new Date(article.attributes.publishedAt).toLocaleString()}
          </p>
        </div>
        <div className="my-5">
          {article.attributes.author.data.attributes.picture && (
            <div className="md:max-h-[300px] md:max-w-[300px] lg:max-h-[500px] lg:max-w-[500px] mb-5 md:mb-0 md:float-left md:pr-10">
              {width > 768 ? (
                <Image
                  src={getStrapiMedia(
                    article.attributes.author.data.attributes.picture
                  )}
                  alt={
                    article.attributes.author.data.attributes.picture.data
                      .attributes.alternativeText
                  }
                  className="rounded"
                  height="500"
                  width="500"
                  objectFit="cover"
                  priority
                />
              ) : (
                <Image
                  src={getStrapiMedia(
                    article.attributes.author.data.attributes.picture
                  )}
                  alt={
                    article.attributes.author.data.attributes.picture.data
                      .attributes.alternativeText
                  }
                  className="rounded"
                  height="200"
                  width="200"
                  objectFit="cover"
                  layout="responsive"
                  priority
                />
              )}
            </div>
          )}
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className={style.reactMarkDown}
          >
            {article.attributes.content}
          </ReactMarkdown>
        </div>
        <div className="flex w-full gap-5 items-center">
          <Link href="/blog">
            <div className="flex items-center gap-5 cursor-pointer transition duration-200 hover:scale-110">
              <IoMdArrowBack size="24px" color="#41a75b" />
              <p className="text-brand-100">Back to all blog posts</p>
            </div>
          </Link>
        </div>
      </Section>
    </Base>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI('/articles', { fields: ['slug'] });

  return {
    paths: articlesRes.data.map((article: any) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const articlesRes = await fetchAPI('/articles', {
    filters: {
      slug: params.slug,
    },
    populate: ['image', 'category', 'author.picture'],
  });
  const categoriesRes = await fetchAPI('/categories');

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes },
    revalidate: 1,
  };
}

export default Article;
