import { useEffect, useState } from 'react';

import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

import { useAppContext } from '../../store';
import { IPaginationProps } from '../../types/tables';

function Pagination(props: IPaginationProps) {
  // Hooks
  const {
    data: { all },
  } = useAppContext();

  // Utils
  const { data, page, setPage, pages } = props;
  const PER_PAGE = 20;
  const PAGE_START = page * PER_PAGE - (PER_PAGE - 1);
  const PAGE_END = page * PER_PAGE;

  // States
  const [totalItems, setTotalItems] = useState<number>(0);

  // useEffects
  useEffect(() => {
    if (data) setTotalItems(data?.length);
    else setTotalItems(all.transactions.length);
  }, []);

  // Functions
  function nextPage(e: any) {
    e.preventDefault();
    if (page !== pages) setPage((state: number) => state + 1);
  }

  function prevPage(e: any) {
    e.preventDefault();
    if (page !== 1) setPage((state: number) => state - 1);
  }

  function changePage(e: any) {
    e.preventDefault();
    const pageNumber = Number(e.target.textContent);
    setPage(pageNumber);
  }

  // TODO: Clean up
  function renderPagination() {
    return (
      <>
        {page > pages / 2 && (
          <>
            <a
              onClick={changePage}
              href="#"
              aria-current="page"
              className="z-10 bg-gray-700 border-gray-300 text-white hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              1
            </a>
            <a
              href="#"
              aria-current="page"
              className="z-10 bg-gray-700 border-gray-300 text-white hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              ...
            </a>
            {page === pages && (
              <a
                onClick={changePage}
                href="#"
                aria-current="page"
                className="z-10 bg-gray-700 border-gray-300 text-white hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                {page - 2}
              </a>
            )}
          </>
        )}
        {page !== 1 && (
          <a
            onClick={changePage}
            href="#"
            aria-current="page"
            className="z-10 bg-gray-700 border-gray-300 text-white hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            {page - 1}
          </a>
        )}
        <a
          onClick={changePage}
          href="#"
          aria-current="page"
          className="z-10 bg-gray-700 text-brand-100 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
        >
          {page}
        </a>
        {page > pages / 2 && page !== pages && (
          <a
            onClick={changePage}
            href="#"
            aria-current="page"
            className="z-10 bg-gray-700 border-gray-300 text-white hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            {page + 1}
          </a>
        )}
        {page <= pages / 2 && (
          <>
            <a
              onClick={changePage}
              href="#"
              aria-current="page"
              className="z-10 bg-gray-700 border-gray-300 text-white hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              {page + 1}
            </a>
            {page === 1 && (
              <a
                onClick={changePage}
                href="#"
                aria-current="page"
                className="z-10 bg-gray-700 border-gray-300 text-white hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                {page + 2}
              </a>
            )}
            <a
              href="#"
              aria-current="page"
              className="z-10 bg-gray-700 border-gray-300 text-white hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              ...
            </a>
            <a
              onClick={changePage}
              href="#"
              aria-current="page"
              className="z-10 bg-gray-700 border-gray-300 text-white hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              {pages}
            </a>
          </>
        )}
      </>
    );
  }

  return (
    <div className="bg-brand-black px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          onClick={prevPage}
          href="#"
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-gray-700 border-gray-300 text-white hover:bg-gray-700"
        >
          Previous
        </a>
        <a
          onClick={nextPage}
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-gray-700 border-gray-300 text-white hover:bg-gray-700"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-100">
            Showing <span className="font-medium">{PAGE_START}</span> to{' '}
            <span className="font-medium">
              {page === pages ? totalItems : PAGE_END}
            </span>{' '}
            of <span className="font-medium">{totalItems || 0}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              onClick={prevPage}
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 transition duration-200"
            >
              <span className="sr-only">Previous</span>
              <BsChevronLeft className="h-5 w-5" aria-hidden="true" />
            </a>
            {renderPagination()}
            <a
              onClick={nextPage}
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 transition duration-200"
            >
              <span className="sr-only">Next</span>
              <BsChevronRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export { Pagination };
