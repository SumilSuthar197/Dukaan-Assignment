// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaRegCircleQuestion, FaCaretDown } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { GroupIcon } from '../../assets/GroupIcon';

const Header = () => {
    return (
        <div className="py-4 px-8  border-b border-[#ccc] flex justify-between bg-white">
            <div className="flex items-center gap-3">
                <div className="text-[20px] font-medium ">Payments</div>
                <div className="mt-1 flex gap-[6px] text-[12px] cursor:pointer text-[#71717a] items-center justify-center">
                    <FaRegCircleQuestion size={16} />
                    <div className="">How it works?</div>
                </div>
            </div>
            <div className="">
                <div className="flex items-center gap-[6px] py-[6px] px-4 rounded-lg bg-[#f7f7f7] text-[#71717a]">
                    <FiSearch />
                    <input className="placeholder:text-[#71717a] outline-none border-none bg-transparent w-[334px]" type="text" placeholder="Search features, tutorial, etc." />
                </div>
            </div>

            <div className="flex gap-[10px] ">
                <div className="flex items-center justify-center bg-[#dfdddd] h-10 w-10 rounded-full cursor-pointer text-[#3f3f46] " >
                    <GroupIcon />
                </div>
                <div className="flex items-center justify-center bg-[#dfdddd] h-10 w-10 rounded-full cursor-pointer text-[#3f3f46] ">
                    <FaCaretDown size={24} color="#3f3f46" />
                </div>
            </div>

        </div >
    )
}

export default Header