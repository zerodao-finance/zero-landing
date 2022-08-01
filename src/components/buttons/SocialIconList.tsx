import Link from 'next/link';

import { DiscordIcon, GithubIcon, TwitterIcon } from '../../utils/svg/socials';

type ISocialIconListProps = {
  reactive?: boolean;
  vertical?: boolean;
};

const SocialIconList = (props: ISocialIconListProps) => (
  <div
    className={`
      footer-icon-list flex flex-wrap gap-3 md:gap-5 md:gap-10 2xl:gap-5 justify-center xl:justify-start 
      ${props.reactive && 'flex-col 2xl:flex-row 2xl:gap-0'}
      ${props.vertical && '!flex-col !gap-5'}
    `}
  >
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

export { SocialIconList };
