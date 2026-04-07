import { PiWalletBold } from "react-icons/pi";
import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-50">

      {/* 1. Left Section: Logo & Nav */}
      <div className="flex items-center gap-8">
        <div className="flex gap-3 items-center">
          <div className="bg-black rounded-lg flex items-center justify-center p-1.5">
            <PiWalletBold className="text-white size-6" />
          </div>
          <p className="text-black text-xl font-bold tracking-tight">Wealth Tracker</p>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="/dashboard" className="text-sm font-semibold text-black border-b-2 border-black pb-5 mt-5">Dashboard</a>
          <a href="/transaction" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">Giao dịch</a>
          <a href="/asset" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">Tài sản</a>
          <a href="/report" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">Báo cáo</a>
        </nav>
      </div>

      {/* 2. Right Section: Search & User */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative hidden lg:block">
          <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
          <input 
            type="text" 
            placeholder="Tìm kiếm..." 
            className="bg-gray-100 border-none rounded-xl py-2 pl-10 pr-4 text-sm w-64 focus:ring-2 focus:ring-gray-200 outline-none"
          />
        </div>

        {/* Notifications */}
        <div className="relative p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors">
          <IoNotificationsOutline className="text-gray-600 size-6" />
          <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
            3
          </span>
        </div>

        {/* User Avatar */}
        <Link to='/login'>
          <div className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full font-bold text-sm cursor-pointer border-2 border-transparent hover:border-gray-200">
          NV
        </div>
        </Link>
      
      </div>
    </header>
  );
};

export default Header;