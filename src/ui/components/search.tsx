import { FormEvent } from 'react';

import { BiSearchAlt, BiLoaderAlt } from 'react-icons/bi';

import { useWindowDimensions } from '../../hooks';

type ISearchInputProps = {
  type?: 'special' | 'default';
  className?: string;
  onSearch?: () => void;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  loading?: boolean;
};

export const SearchInput = ({
  type,
  onChange,
  onSearch,
  value,
  placeholder,
  loading,
}: ISearchInputProps) => {
  const { width, breakpoints } = useWindowDimensions();
  const renderPlaceHolder = placeholder || 'Start typing here...';
  const renderBtnContent = () => {
    if (loading)
      return (
        <>
          <BiLoaderAlt className="animate-spin" size="20px" />
        </>
      );
    if (width < breakpoints.sm) return <BiSearchAlt size="20px" />;
    if (width > breakpoints.sm)
      return (
        <>
          Search <BiSearchAlt />
        </>
      );
    return <span>Search</span>;
  };
  if (type === 'special') {
    return (
      <div className="relative w-full">
        <div className="overflow-hidden z-0 rounded-full relative p-[3px]">
          <form
            role="form"
            className="relative flex z-50 bg-neutral-100 rounded-full"
            onSubmit={onSearch}
          >
            <input
              type="text"
              placeholder={renderPlaceHolder}
              className="rounded-full bg-neutral-100 flex-1 px-4 py-2 text-gray-700 focus:outline-none placeholder:text-gray-200"
              onChange={onChange}
              value={value}
            />
            <button
              type="submit"
              className="bg-brand-900 text-white rounded-r-full font-semibold px-4 py-2 hover:bg-brand-100 focus:bg-brand-100 transition duration-200 focus:outline-none flex items-center gap-1.5"
            >
              {renderBtnContent()}
            </button>
          </form>
          <div className="glow glow-1 z-10 animate-glow1 bg-green-300 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
          <div className="glow glow-2 z-20 animate-glow2 bg-green-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
          <div className="glow glow-3 z-30 animate-glow3 bg-lime-300 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
          <div className="glow glow-4 z-40 animate-glow4 bg-emerald-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
        </div>
      </div>
    );
  }
  return (
    <form role="form" className="relative flex z-50 bg-white rounded-full">
      <input
        type="text"
        placeholder={renderPlaceHolder}
        className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"
      />
      <button className="bg-brand-900 text-white rounded-r-full font-semibold px-8 py-4 hover:bg-brand-100 focus:bg-brand-100 transition duration-200 focus:outline-none">
        Search
      </button>
    </form>
  );
};
