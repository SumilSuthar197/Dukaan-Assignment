import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
const SideItems = ({ iconName, text, to }) => {
    return (
        <Link to={to}>
            <li className="hover:cursor-pointer hover:bg-[#ffffff0d] flex items-center gap-3 px-4 py-2 rounded-md mb-1 text-[14px]">
                <div className="">{iconName}</div>
                <div className="">{text}</div>
            </li>
        </Link>
    )
}

export default SideItems