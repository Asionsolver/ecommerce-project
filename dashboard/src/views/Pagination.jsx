/* eslint-disable react/prop-types */

import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const Pagination = ({
  pageNumber,
  setPageNumber,
  totalItem,
  parPage,
  showItem,
}) => {
  let totalPages = Math.ceil(totalItem / parPage);
  let startPage = pageNumber;
  let dif = totalPages - pageNumber;
  if (dif <= showItem) {
    startPage = totalPages - showItem;
  }

  let endPage = startPage < 0 ? showItem : showItem + startPage;

  if (startPage <= 0) {
    startPage = 1;
  }

  const createButton = () => {
    const buttons = [];
    for (let i = startPage; i < endPage; i++) {
      buttons.push(
        <li
          key={i}
          className={`w-[33px] h-[33px] flex justify-center items-center cursor-pointer rounded-full bg-slate-300 text-lightGray ${
            pageNumber === i
              ? "bg-indigo-300 shadow-lg shadow-indigo-300/50 text-white"
              : "bg-slate-600 hover:bg-indigo-400 shadow-lg hover:shadow-indigo-500/50 hover:text-white text-lightGray"
          }`}
          onClick={() => setPageNumber(i)}
        >
          {i}
        </li>
      );
    }
    return buttons;
  };

  return (
    <ul className="flex gap-3">
      {pageNumber > 1 && (
        <li
          className="w-[33px] h-[33px] flex justify-center items-center rounded-full text-lightGray cursor-pointer bg-slate-600 hover:bg-indigo-400 shadow-lg hover:shadow-indigo-500/50 hover:text-white "
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          <MdKeyboardDoubleArrowLeft />
        </li>
      )}
      {createButton()}
      {pageNumber < totalPages && (
        <li
          className="w-[33px] h-[33px] flex justify-center items-center rounded-full text-lightGray cursor-pointer bg-slate-600 hover:bg-indigo-400 shadow-lg hover:shadow-indigo-500/50 hover:text-white "
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          <MdKeyboardDoubleArrowLeft className="transform rotate-180" />
        </li>
      )}
    </ul>
  );
};

export default Pagination;
