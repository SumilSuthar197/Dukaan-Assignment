/* eslint-disable react/prop-types */
import { useTable, useSortBy, usePagination } from "react-table";
import { FiInfo } from "react-icons/fi";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { FaSort } from "react-icons/fa6";
import Pagination from "./Pagination";

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canNextPage,
    canPreviousPage,
    pageOptions,
    nextPage,
    previousPage,
    gotoPage,
    state: { pageIndex },
  } = useTable({ columns, data }, useSortBy, usePagination);
  const startPage = Math.max(1, pageIndex - 3);
  const endPage = Math.min(pageOptions.length, startPage + 4);

  return (
    <div>
      <table
        className="w-full  text-[14px] border-collapse"
        {...getTableProps()}
      >
        <thead className="bg-[#f7f7f7] text-[#71717a] font-[400] text-left ">
          {headerGroups.map((headerGroup, index) => (
            <tr
              className="flex justify-between items-center last:border-0 border-b-[2px] border-[#f7f7f7]"
              key={index}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  className={`last:px-0 last:pr-1 flex justify-center items-center py-[14px]  px-3 text-[#4d4d4d] ${
                    columnIndex === 1 ? "ml-20" : ""
                  } ${columnIndex === 2 ? "ml-20" : ""} `}
                  key={columnIndex}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  {column.render("Header") === "Transaction Fees" && (
                    <span className="p-1 ">
                      <FiInfo size={16} />
                    </span>
                  )}
                  {/* {column.render("Header") === "Order Date" && (
                  <span className="p-1 ">
                    <FaCaretDown />
                  </span>
                )} */}
                  {column.isSorted ? (
                    <span className="p-1 ">
                      {column.isSortedDesc ? (
                        <FaCaretDown size={16} />
                      ) : (
                        <FaCaretUp size={16} />
                      )}
                    </span>
                  ) : (
                    <span className="p-1 ">
                      {column.render("Header") !== "Transaction Fees" ? (
                        <FaSort size={12} />
                      ) : (
                        ""
                      )}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <tr
                className="border-b border-[#f7f7f7] flex justify-between items-center "
                key={index}
                {...row.getRowProps()}
              >
                {row.cells.map((cell, cellIndex) => (
                  <td
                    className={`last:text-right py-[14px] px-3  ${
                      cellIndex === 0 ? "text-[#146eb4]" : ""
                    }`}
                    key={cellIndex}
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        startPage={startPage}
        endPage={endPage}
        gotoPage={gotoPage}
        previousPage={previousPage}
        nextPage={nextPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageIndex={pageIndex}
      />
    </div>
  );
};

export default Table;
