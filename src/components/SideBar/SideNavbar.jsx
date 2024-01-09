import WalletIcon from '../../assets/WalletIcon';
import SideItems from './SideItems';
import { FaAngleDown } from "react-icons/fa6";
import Order from '../../assets/Order';
import Product from '../../assets/Product';
import Delivery from '../../assets/Delivery';
import Marketing from '../../assets/Marketing';
import Analytics from '../../assets/Analytics';
import Payment from '../../assets/Payment';
import Tools from '../../assets/Tools';
import Discounts from '../../assets/Discounts';
import Audience from '../../assets/Audience';
import Home from '../../assets/Home';
import Appearance from '../../assets/Appearance';
import Plugins from '../../assets/Plugins';

const SideNavbar = () => {
    return (
        <div className="flex flex-col h-full">
            <div className="p-4 pb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="">
                        <img src="/Image.jpg" className='rounded-md h-10 w-10' alt="user logo" />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[15px] font-medium text-white">Nishyan</div>
                        <div className="text-sm underline text-[#ccc] hover:text-white">Visit store</div>
                    </div>
                </div>
                <FaAngleDown />
            </div>
            <ul className="p-2 list-none flex-1">
                <SideItems iconName={<Home />} text='Home' to="/" />
                <SideItems iconName={<Order />} text='Orders' to="/" />
                <SideItems iconName={<Product />} text='Products' to="/" />
                <SideItems iconName={<Delivery />} text='Delivery' to="/" />
                <SideItems iconName={<Marketing />} text='Marketing' to="/" />
                <SideItems iconName={<Analytics />} text='Analytics' to="/" />
                <SideItems iconName={<Payment />} text='Payments' to="/" />
                <SideItems iconName={<Tools />} text='Tools' to="/" />
                <SideItems iconName={<Discounts />} text='Discounts' to="/" />
                <SideItems iconName={<Audience />} text='Audience' to="/" />
                <SideItems iconName={<Appearance />} text='Appearance' to="/" />
                <SideItems iconName={<Plugins />} text='Plugins' to="/" />
            </ul>
            <div className="mt-auto mb-5 mx-4 px-4 py-[6px] flex gap-3 bg-[#ffffff0d] rounded-md text-sm ">
                <div className="grid place-content-center">
                    <WalletIcon />
                </div>
                <div className="flex flex-col ">
                    <span>Available credits</span>
                    <span className="text-[15px] font-medium text-white">222.10</span>
                </div>
            </div>
        </div>
    )
}

export default SideNavbar