import { BiChevronRightCircle } from 'react-icons/bi';

type ILinkProps = {
  text?: string;
  link: string;
};

export const RedirectLink = ({ text, link }: ILinkProps) => {
  return (
    <a
      href={link}
      className="text-sm flex gap-1 transition duration-150 hover:text-neutral-300"
      target={'_blank'}
      rel="noreferrer"
    >
      {text || 'Learn More'}
      <BiChevronRightCircle size="16px" className="relative top-[1.5px]" />
    </a>
  );
};
