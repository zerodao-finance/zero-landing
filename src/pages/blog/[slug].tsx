import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoMdArrowBack } from 'react-icons/io';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { fetchAPI } from '../../api/strapi/api';
import { getStrapiMedia } from '../../api/strapi/media';
import useWindowDimensions from '../../hooks/window-dimensions';
import style from '../../styles/markdown-styles.module.css';
import { Base } from '../../ui/base';
import { SocialIconList } from '../../ui/buttons/social-icons';
import { Section } from '../../ui/layout/section';

const Article = ({ article }: any) => {
  // Hooks
  const router = useRouter();
  const { width } = useWindowDimensions();

  // States
  const [statefulArticle, setStatefulArticle] = useState(article);

  const cleanMetaTitle = (title: string) => {
    if (title && title.startsWith('zeroDAO ')) {
      return title.split('zeroDAO ')[1];
    }
    return title;
  };

  useEffect(() => {
    const getArticles = async () => {
      const articlesRes = await fetchAPI('/articles', {
        filters: {
          slug: `${router.asPath.split('/')[2]}`,
        },
        populate: ['image', 'category', 'author.picture'],
      });
      setStatefulArticle(articlesRes.data[0]);
    };
    getArticles();
  }, []);

  return (
    <Base
      withNav
      meta={{
        title: `zeroDAO - ${cleanMetaTitle(statefulArticle?.attributes.title)}`,
        description: statefulArticle?.attributes.description,
        image: statefulArticle?.attributes?.thumbnail,
      }}
    >
      <Section vertical style="!pt-28">
        <div className="mb-1">
          <h1 className="text-3xl font-bold">
            {statefulArticle?.attributes.title}
          </h1>
        </div>
        <div>
          {statefulArticle?.attributes.author?.data?.attributes?.name && (
            <p>
              Author: {statefulArticle?.attributes.author.data.attributes.name}
            </p>
          )}
          <div className="flex flex-col md:flex-row w-full justify-between">
            <p>
              Published On:{' '}
              {new Date(
                statefulArticle?.attributes.publishedAt
              ).toLocaleString()}
            </p>
            <SocialIconList
              blogShare={`https://zerodao.com${router.asPath}`}
              className={`!justify-start mt-3 md:justify-center md:mt-0`}
            />
          </div>
        </div>
        <div className="my-5">
          {statefulArticle?.attributes.author?.data?.attributes?.picture && (
            <div className="md:max-h-[300px] md:max-w-[300px] lg:max-h-[500px] lg:max-w-[500px] mb-5 md:mb-0 md:float-left md:pr-10">
              {width > 768 ? (
                <Image
                  src={getStrapiMedia(
                    statefulArticle?.attributes.author.data.attributes.picture
                  )}
                  alt={
                    statefulArticle?.attributes.author.data.attributes.picture
                      .data.attributes.alternativeText
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
                    statefulArticle?.attributes.author.data.attributes.picture
                  )}
                  alt={
                    statefulArticle?.attributes.author.data.attributes.picture
                      .data.attributes.alternativeText
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
            transformImageUri={(uri) =>
              uri.startsWith('http') ? uri : `https://cms.zerodao.com${uri}`
            }
            remarkPlugins={[remarkGfm]}
            className={style.reactMarkDown}
          >
            {statefulArticle?.attributes.content}
          </ReactMarkdown>
        </div>
        <div className="flex w-full gap-5 items-center mt-5">
          <Link href="/blog">
            <div className="flex items-center gap-2 cursor-pointer transition duration-150 hover:text-brand-100 pr-2 py-1">
              <IoMdArrowBack size="24px" color="" />
              <p className="">Back to all blog posts</p>
            </div>
          </Link>
        </div>
      </Section>
    </Base>
  );
};

export async function getStaticPaths() {
  // TODO: fix so that no redeploy required
  const articlesRes = await fetchAPI('/articles', { fields: ['slug'] });

  return {
    paths: articlesRes.data.map((article: any) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: true,
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
    revalidate: 3,
  };
}

export default Article;
