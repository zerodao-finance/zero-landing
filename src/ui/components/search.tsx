import { FormEvent } from 'react';

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
}: ISearchInputProps) => {
  const renderPlaceHolder = placeholder || 'Start typing here...';
  if (type === 'special') {
    return (
      <div className="relative w-full">
        <div className="overflow-hidden z-0 rounded-full relative p-1">
          <form
            role="form"
            className="relative flex z-50 bg-neutral-100 rounded-full"
            onSubmit={onSearch}
          >
            <input
              type="text"
              placeholder={renderPlaceHolder}
              className="rounded-full bg-neutral-100 flex-1 px-5 py-3 text-gray-700 focus:outline-none placeholder:text-gray-200"
              onChange={onChange}
              value={value}
            />
            <button
              type="submit"
              className="bg-brand-900 text-white rounded-r-full font-semibold px-5 py-3 hover:bg-brand-100 focus:bg-brand-100 transition duration-200 focus:outline-none"
            >
              {'Search'}
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
