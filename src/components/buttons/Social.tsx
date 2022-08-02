import Link from 'next/link';
import { FaTwitter } from 'react-icons/fa';

type ISocialButton = {
  name?: string;
  href?: string;
};

const SocialShareButton = (props: ISocialButton) => (
  <div
    className={`rounded-full bg-[#1DA1F2] p-2 flex items-center gap-2 transition duration-200 hover:scale-110`}
  >
    <Link
      href={props.href ? props.href : 'https://twitter.com/zerodaohq'}
      target="_blank"
    >
      <a className="flex justify-center fill-white">
        <FaTwitter size="24px" />
      </a>
    </Link>
    {/* <p className="font-medium">Share</p> */}
  </div>
);

export { SocialShareButton };