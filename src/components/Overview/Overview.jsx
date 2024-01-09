import Card from './Card'

const Overview = () => {
    return (
        <div className="p-8">
            <div className="flex items-center justify-between">
                <label className="text-[20px] font-medium  ">Overview</label>
                <select name="type" id="type" className=" outline-none py-[6px] px-[10px] border border-[#ccc] bg-white rounded-[4px] text-[#3f3f46]">
                    <option value="Last Month">Last Month</option>
                    <option value="Last Month">Last Month</option>
                    <option value="Last Month">Last Month</option>
                </select>
            </div>
            <div className="mt-7 flex justify-between gap-6 ">
                <Card title="Online Orders" amount="231" />
                <Card title="Amount Processed" amount="₹23,92,312.19" />
            </div>
        </div>
    )
}

export default Overview