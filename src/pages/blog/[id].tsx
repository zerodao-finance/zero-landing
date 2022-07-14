import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { Section } from '../../components/layout/Section';
import { Base } from '../../components/templates/Base';
import { BLOGS } from '../../utils/Blogs';

const BlogPost = () => {
  const router = useRouter();

  useEffect(() => {
    const figure = document.getElementsByTagName('figure');
    const h3 = document.getElementsByTagName('h3');
    const p = document.getElementsByTagName('p');
    const ol = document.getElementsByTagName('ol');
    const li = document.getElementsByTagName('li');

    for (let i = 0; i < p.length && li.length; i++) {
      // Header
      h3[i]?.classList.add('text-2xl', 'font-bold');

      // Spacing
      figure[i]?.classList.add('my-5');
      p[i]?.classList.add('my-2');

      // Lists
      ol[i]?.classList.add('list-disc', 'mx-10');
      li[i]?.classList.add('mb-2');
    }
  });

  const render = () => {
    const shallowFound = BLOGS.find((el) => String(el.id) === router.query?.id);

    if (shallowFound) {
      return (
        <div
          dangerouslySetInnerHTML={{ __html: shallowFound.description }}
          className="w-full"
        />
      );
    }
    return <p>Not found.</p>;
  };

  return (
    <Base withNav title={`zeroDAO`}>
      <Section>{render()}</Section>
    </Base>
  );
};

export default BlogPost;
