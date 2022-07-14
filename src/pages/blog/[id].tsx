import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoMdArrowBack } from 'react-icons/io';

import { Section } from '../../components/layout/Section';
import { Base } from '../../components/templates/Base';
import { BLOGS } from '../../utils/Blogs';

const BlogPost = () => {
  const router = useRouter();
  const [found, setFound] = useState<any>();

  useEffect(() => {
    const figure = document.getElementsByTagName('figure');
    const h3 = document.getElementsByTagName('h3');
    const p = document.getElementsByTagName('p');
    const ol = document.getElementsByTagName('ol');
    const li = document.getElementsByTagName('li');
    const figcaption = document.getElementsByTagName('figcaption');
    const img = document.getElementsByTagName('img');
    const a = document.getElementsByTagName('a');

    for (let i = 0; i < p.length && li.length; i++) {
      // Header
      h3[i]?.classList.add('text-2xl', 'font-bold');

      // Spacing
      figure[i]?.classList.add('my-5');
      p[i]?.classList.add('my-2');
      figcaption[i]?.classList.add('mt-2', 'text-xs');

      // Lists
      ol[i]?.classList.add('list-disc', 'mx-10');
      li[i]?.classList.add('mb-2');

      // Links
      if (a[i]?.innerText.toLowerCase() === 'javascript is not available.') {
        a[i]?.classList.add('hidden');
      }
      if (
        a[i]?.innerText.toUpperCase() !== 'HOME' &&
        a[i]?.innerText.toUpperCase() !== 'HOME' &&
        a[i]?.innerText.toUpperCase() !== 'HOME' &&
        a[i]?.innerText === 'HOME'
      ) {
        a[i]?.classList.add('underline', 'text-brand-100');
      } else {
        li[i]?.classList.add('mb-0');
      }

      // Images
      img[i]?.classList.add('max-w-[100%]', 'my-0', 'mx-auto');
    }
  });

  useEffect(() => {
    const shallowFound = BLOGS.find((el) => String(el.id) === router.query?.id);
    setFound(shallowFound);
  }, [router]);

  const render = () => {
    if (found) {
      return (
        <div
          dangerouslySetInnerHTML={{ __html: found.description }}
          className="w-full break-words"
        />
      );
    }
    return <p>Not found.</p>;
  };

  const cleanupTitle = (str: string) => {
    if (str) {
      if (str.includes('—')) {
        return str.split('—')[1];
      }
      return str;
    }
    return '';
  };

  return (
    <Base
      withNav
      title={`zeroDAO${found ? ` - ${cleanupTitle(found.title)}` : ''}`}
    >
      <Section vertical>
        <div className="flex w-full justify-between items-center mb-5">
          <Link href="/blog">
            <div className="cursor-pointer transition duration-200 hover:scale-110">
              <IoMdArrowBack size="24px" color="#41a75b" />
            </div>
          </Link>
          <Link href={found?.link || '/blog'} target="_blank">
            View Full Article
          </Link>
        </div>
        {render()}
      </Section>
    </Base>
  );
};

export default BlogPost;
