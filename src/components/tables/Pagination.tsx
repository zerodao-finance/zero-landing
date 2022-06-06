import { useState } from 'react';

import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

type IPaginationProps = {
  data: Array<any>;
};

function Pagination(props: IPaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  function nextPage() {
    setCurrentPage((page) => page + 1);
  }

  function prevPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(e: any) {
    const pageNumber = Number(e.target.textContent);
    setCurrentPage(pageNumber);
  }

  return (
    <div className="bg-brand-black px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-100">
            Showing <span className="font-medium">1</span> to{' '}
            <span className="font-medium">20</span> of{' '}
            <span className="font-medium">{props.data.length || 0}</span>{' '}
            results
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
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            <a
              href="#"
              aria-current="page"
              className="z-10 bg-gray-700 border-brand-100 text-brand-100 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              {currentPage || 1}
            </a>
            <a
              onClick={changePage}
              href="#"
              className="bg-gray-800 border-gray-300 text-white hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              2
            </a>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-gray-800 text-sm font-medium text-white">
              ...
            </span>
            <a
              href="#"
              className="bg-gray-800 border-gray-300 text-white hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              10
            </a>
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
