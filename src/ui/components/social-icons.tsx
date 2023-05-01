import React, { useEffect } from 'react';

import Link from 'next/link';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BiLink, BiCheck } from 'react-icons/bi';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FacebookShareButton, LinkedinShareButton } from 'react-share';

import { DiscordIcon, GithubIcon, TwitterIcon } from '../../utils/svg/socials';

type ISocialIconListProps = {
  reactive?: boolean;
  vertical?: boolean;
  blogShare?: string;
  className?: string;
};

const SocialIconList = (props: ISocialIconListProps) => {
  const [isSuccess, setIsSuccess] = React.useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false);
    }, 3000);

    return () => clearInterval(timeout);
  }, [isSuccess]);

  return (
    <div
      className={`
      footer-icon-list flex flex-wrap gap-3 justify-center lg:justify-start 
      ${props.reactive && 'flex-col 2xl:flex-row 2xl:gap-0'}
      ${props.vertical && '!flex-col !gap-5'}
      ${props.blogShare && '!gap-3'}
      ${props.className ? props.className : ''}
    `}
    >
      {props.blogShare ? (
        <>
          <CopyToClipboard
            text={props.blogShare}
            onCopy={() => setIsSuccess(true)}
          >
            <a className={`min-w-[32px] flex justify-center cursor-pointer`}>
              {isSuccess ? <BiCheck /> : <BiLink />}
            </a>
          </CopyToClipboard>
          <Link
            href={`https://twitter.com/intent/tweet?text=@zerodaohq ${props.blogShare}`}
            target="_blank"
          >
            <a className={`min-w-[32px] flex justify-center`}>
              <FaTwitter />
            </a>
          </Link>
          <FacebookShareButton url={props.blogShare}>
            <a className="min-w-[32px] flex justify-center">
              <FaFacebook />
            </a>
          </FacebookShareButton>
          <LinkedinShareButton url={props.blogShare}>
            <a className="min-w-[32px] flex justify-center">
              <FaLinkedin />
            </a>
          </LinkedinShareButton>
        </>
      ) : (
        <>
          <Link href="https://discord.gg/TNNSxFXcgU" target="_blank">
            <a className={`min-w-[40px] flex justify-center`}>
              <DiscordIcon />
            </a>
          </Link>
          <Link href="https://github.com/zerodao-finance" target="_blank">
            <a className="min-w-[40px] flex justify-center">
              <GithubIcon />
            </a>
          </Link>

          <Link href="https://twitter.com/zerodaohq" target="_blank">
            <a className="min-w-[40px] flex justify-center">
              <TwitterIcon />
            </a>
          </Link>
        </>
      )}

      <style jsx>
        {`
          .footer-icon-list :global(a:not(:last-child)) {
            @apply px-2;
          }

          .footer-icon-list :global(a) {
            @apply text-white transition duration-200;
          }

          .footer-icon-list :global(a:hover) {
            @apply text-gray-100;
          }

          .footer-icon-list :global(svg) {
            @apply fill-current w-6 h-6;
          }
        `}
      </style>
    </div>
  );
};

export { SocialIconList };
