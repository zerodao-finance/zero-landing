import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoMdArrowBack } from 'react-icons/io';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import style from '../../styles/markdown-styles.module.css';
import { Base } from '../../ui/base';
import { SocialIconList } from '../../ui/components';
import { Section } from '../../ui/layout/section';
import { STATIC_ARTICLES } from '../../utils/static-articles';

const Article = ({ article }: any) => {
  // Hooks
  const router = useRouter();

  const cleanMetaTitle = (title: string) => {
    if (title && title.startsWith('zeroDAO ')) {
      return title.split('zeroDAO ')[1];
    }
    return title;
  };

  if (!article) {
    return null;
  }

  return (
    <Base
      meta={{
        title: `ZERO | ${cleanMetaTitle(article?.attributes.title)}`,
        description: article?.attributes.description,
        image: article?.attributes?.thumbnail,
      }}
    >
      <Section vertical>
        <div className="mb-1">
          <h1 className="text-2xl 2xl:text-3xl font-bold">
            {article?.attributes.title}
          </h1>
        </div>
        <div>
          {article?.attributes.author?.data?.attributes?.name && (
            <p>Author: {article?.attributes.author.data.attributes.name}</p>
          )}
          <div className="flex flex-col md:flex-row w-full justify-between text-sm">
            <p>
              Published On:{' '}
              {new Date(article?.attributes.publishedAt).toLocaleDateString()}
            </p>
            <SocialIconList
              blogShare={`https://zerodao.com${router.asPath}`}
              className={`!justify-start mt-3 md:justify-center md:mt-0`}
            />
          </div>
        </div>
        <div className="my-5">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className={style.reactMarkDown}
          >
            {article?.attributes.content}
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
  return {
    paths: STATIC_ARTICLES.map((article: any) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const article = STATIC_ARTICLES.find(
    (a) => a.attributes.slug === params.slug
  );

  return {
    props: { article: article || null },
  };
}

export default Article;
