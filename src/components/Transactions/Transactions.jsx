/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BsDownload } from "react-icons/bs";
import { BiSort } from "react-icons/bi";
import Table from "./Table";
import transaction from "../../utils/TransactionData";
const Transaction = () => {
  const [data, setData] = useState(transaction);
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value === "") {
      setData(transaction);
    } else {
      const filteredData = transaction.filter((item) =>
        item.order_ID.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setData(filteredData);
    }
  };
  const columns = [
    {
      Header: "Order ID",
      accessor: "order_ID",
    },
    {
      Header: "Order Date",
      accessor: "order_date",
      sortType: (rowA, rowB, columnId) => {
        const dateA = new Date(rowA.values[columnId]);
        const dateB = new Date(rowB.values[columnId]);
        return dateA - dateB;
      },
      Cell: ({ value }) => {
        return value;
      },
    },
    {
      Header: "Order Amount",
      accessor: "order_amount",
    },
    {
      Header: "Transaction Fees",
      accessor: "transaction_fees",
      disableSortBy: true,
    },
  ];

  return (
    <section className="px-8">
      <div className="text-[20px] font-medium">Transactions | This Month</div>
      <div className="mb-4 mt-5 bg-white rounded-md py-2 px-[10px] ">
        <div className="flex justify-between items-center">
          <div className="py-[6px] pr-2 pl-3 border border-[#ccc] rounded-sm flex gap-[6px] items-center w-[240px] text-[#71717a]">
            <FiSearch size={18} />
            <input
              type="text"
              className="py-1 text-[14px] outline-none border-none w-full placeholder:text-[#71717a] "
              placeholder="Search by Order ID"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-5 ">
            <div className="flex items-center gap-[6px] py-[6px] px-[10px] border border-[#ccc] rounded-sm">
              Sort
              <BiSort size={18} />
            </div>
            <button className="flex items-center gap-[6px] py-[6px] px-2 border border-[#ccc] rounded-sm cursor-pointer">
              <BsDownload size={18} />
            </button>
          </div>
        </div>
        <div className="mt-[10px] ">
          <Table columns={columns} data={data} />
        </div>
      </div>
    </section>
  );
};

export default Transaction;
