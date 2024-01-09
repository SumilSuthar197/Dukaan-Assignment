/* eslint-disable react/prop-types */
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const Pagination = ({
  startPage,
  endPage,
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
  gotoPage,
  pageIndex,
}) => {
  return (
    <div className="flex my-4 items-center justify-center">
      <button
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
        className={`border border-gray-300 px-4 py-1 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md hover:bg-blue-500 hover:text-white ${
          !canPreviousPage &&
          "hover:bg-white hover:text-gray-700 hover:cursor-not-allowed"
        }`}
      >
        <div className="flex items-center -mx-1">
          <MdKeyboardArrowLeft size={20} />
          <span className="mx-1">Previous</span>
        </div>
      </button>

      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      ).map((number) => (
        <button
          key={number}
          className={`px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform rounded-md sm:inline hover:bg-blue-500 hover:text-white ${
            number === pageIndex + 1 && "text-white bg-blue-500"
          }`}
          onClick={() => gotoPage(number - 1)}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => nextPage()}
        disabled={!canNextPage}
        className={`border border-gray-300 px-4 py-1 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md hover:bg-blue-500 hover:text-white ${
          !canNextPage &&
          "hover:bg-white hover:text-gray-700 hover:cursor-not-allowed"
        }`}
      >
        <div className="flex items-center -mx-1">
          <span className="mx-1">Next</span>
          <MdKeyboardArrowRight size={20} />
        </div>
      </button>
    </div>
  );
};

export default Pagination;
