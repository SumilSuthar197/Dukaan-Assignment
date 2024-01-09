/* eslint-disable react/prop-types */
const Card = ({ title, amount }) => {
    return (
        <div className="py-6 px-5 bg-white rounded-lg w-full flex flex-col gap-4 h-fit relative">
            <div className="flex gap-[6px] items-center text-[#3f3f46]">
                <div className="">{title}</div>
            </div>
            <div className="flex items-center justify-between ">
                <div className="font-[600] text-[28px] ">{amount}</div>
            </div>
        </div>
    )
}

export default Card