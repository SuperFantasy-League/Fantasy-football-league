import React from "react";
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Pagination = ({ currentPage = 1, totalPages = 19 }) => {
  return (
    <div className="flex items-center gap-2">
      {/* First Page Button */}
      <button
        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 
                   flex items-center justify-center transition-colors
                   text-purple-900"
        aria-label="Go to first page"
      >
        <ChevronFirst size={20} />
      </button>

      {/* Previous Page Button */}
      <button
        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 
                   flex items-center justify-center transition-colors
                   text-purple-900"
        aria-label="Go to previous page"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Page Counter */}
      <div className="flex items-center">
        <span className="text-purple-900 font-medium">{currentPage}</span>
        <span className="text-purple-900 mx-1">of</span>
        <span className="text-purple-900 font-medium">{totalPages}</span>
      </div>

      {/* Next Page Button */}
      <button
        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 
                   flex items-center justify-center transition-colors
                   text-purple-900"
        aria-label="Go to next page"
      >
        <ChevronRight size={20} />
      </button>

      {/* Last Page Button */}
      <button
        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 
                   flex items-center justify-center transition-colors
                   text-purple-900"
        aria-label="Go to last page"
      >
        <ChevronLast size={20} />
      </button>
    </div>
  );
};

// Example usage with click handlers and disabled states
const PaginationWithHandlers = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 19;

  const goToFirstPage = () => setCurrentPage(1);
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(1, prev - 1));
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  const goToLastPage = () => setCurrentPage(totalPages);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={goToFirstPage}
        disabled={currentPage === 1}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
                   ${
                     currentPage === 1
                       ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                       : "bg-gray-100 hover:bg-gray-200 text-purple-900"
                   }`}
        aria-label="Go to first page"
      >
        <ChevronFirst size={20} />
      </button>

      <button
        onClick={goToPrevPage}
        disabled={currentPage === 1}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
                   ${
                     currentPage === 1
                       ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                       : "bg-gray-100 hover:bg-gray-200 text-purple-900"
                   }`}
        aria-label="Go to previous page"
      >
        <ChevronLeft size={20} />
      </button>

      <div className="flex items-center">
        <span className="text-purple-900 font-medium">{currentPage}</span>
        <span className="text-purple-900 mx-1">of</span>
        <span className="text-purple-900 font-medium">{totalPages}</span>
      </div>

      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
                   ${
                     currentPage === totalPages
                       ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                       : "bg-gray-100 hover:bg-gray-200 text-purple-900"
                   }`}
        aria-label="Go to next page"
      >
        <ChevronRight size={20} />
      </button>

      <button
        onClick={goToLastPage}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
                   ${
                     currentPage === totalPages
                       ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                       : "bg-gray-100 hover:bg-gray-200 text-purple-900"
                   }`}
        aria-label="Go to last page"
      >
        <ChevronLast size={20} />
      </button>
    </div>
  );
};

export default PaginationWithHandlers;
