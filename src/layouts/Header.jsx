import { useState } from "react";
import { PiWalletBold } from "react-icons/pi";
import { IoSearchOutline, IoNotificationsOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom"; // Dùng NavLink thay vì thẻ 'a' hoặc 'Link' thông thường

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Giao dịch", path: "/transaction" },
    { name: "Tài sản", path: "/asset" },
    { name: "Báo cáo", path: "/report" },
  ];

  // Hàm helper để quản lý class cho Desktop và Mobile
  const getLinkClass = ({ isActive }) => 
    `text-sm font-medium transition-all duration-300 relative pb-1 md:pb-0 ` + 
    (isActive 
      ? "text-black md:after:content-[''] md:after:absolute md:after:left-0 md:after:bottom-[-22px] md:after:w-full md:after:h-[2px] md:after:bg-black" 
      : "text-gray-500 hover:text-black");

  const getMobileLinkClass = ({ isActive }) =>
    `text-base font-semibold py-3 px-4 rounded-lg transition-all ` +
    (isActive 
      ? "bg-black text-white" // Khi click vào trên mobile sẽ có nền đen chữ trắng nổi bật
      : "text-gray-600 hover:bg-gray-100");

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 z-50">
      
      {/* 1. Left Section: Logo & Hamburger */}
      <div className="flex items-center gap-3 md:gap-8">
        <button 
          className="md:hidden p-1 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoCloseOutline size={28} /> : <IoMenuOutline size={28} />}
        </button>

        <Link to="/" className="flex gap-2 md:gap-3 items-center">
          <div className="bg-black rounded-lg flex items-center justify-center p-1.5">
            <PiWalletBold className="text-white size-5 md:size-6" />
          </div>
          <p className="text-black text-lg md:text-xl font-bold tracking-tight">Wealth Tracker</p>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink 
              key={link.path}
              to={link.path} 
              className={getLinkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* 2. Right Section */}
      <div className="flex items-center gap-2 md:gap-4">
        <div className="relative hidden lg:block">
          <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
          <input 
            type="text" 
            placeholder="Tìm kiếm..." 
            className="bg-gray-100 border-none rounded-xl py-2 pl-10 pr-4 text-sm w-48 xl:w-64 focus:ring-2 focus:ring-gray-200 outline-none"
          />
        </div>

        <div className="relative p-2 hover:bg-gray-100 rounded-full cursor-pointer">
          <IoNotificationsOutline className="text-gray-600 size-6" />
          <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
            3
          </span>
        </div>

        <Link to='/login'>
          <div className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 bg-black text-white rounded-full font-bold text-xs md:text-sm border-2 border-transparent hover:border-gray-300 transition-all">
            NV
          </div>
        </Link>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div className={`absolute top-16 left-0 right-0 bg-white border-b border-gray-200 flex flex-col p-4 gap-2 md:hidden transition-all duration-300 origin-top ${isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}>
        {navLinks.map((link) => (
          <NavLink 
            key={link.path}
            to={link.path} 
            className={getMobileLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
        
        <div className="relative mt-4">
          <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
          <input 
            type="text" 
            placeholder="Tìm kiếm..." 
            className="bg-gray-100 border-none rounded-xl py-3 pl-10 pr-4 text-sm w-full outline-none"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;