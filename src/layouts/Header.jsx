import { useState } from "react";
import { PiWalletBold } from "react-icons/pi";
import { IoSearchOutline, IoNotificationsOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Mẹo: Trong thực tế, bạn sẽ lấy giá trị này từ AuthContext hoặc Redux
  // const { isLoggedIn, user } = useAuth(); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Giả sử đã đăng nhập thành công

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Giao dịch", path: "/transaction" },
    { name: "Tài sản", path: "/asset" },
    { name: "Báo cáo", path: "/report" },
  ];

  const getLinkClass = ({ isActive }) => 
    `text-sm font-medium transition-all duration-300 relative pb-1 md:pb-0 ` + 
    (isActive 
      ? "text-black md:after:content-[''] md:after:absolute md:after:left-0 md:after:bottom-[-22px] md:after:w-full md:after:h-[2px] md:after:bg-black" 
      : "text-gray-500 hover:text-black");

  const getMobileLinkClass = ({ isActive }) =>
    `text-base font-semibold py-3 px-4 rounded-lg transition-all ` +
    (isActive ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100");

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 z-50">
      
      {/* 1. Left Section: Logo & Nav */}
      <div className="flex items-center gap-3 md:gap-8">
        <button className="md:hidden p-1 hover:bg-gray-100 rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <IoCloseOutline size={28} /> : <IoMenuOutline size={28} />}
        </button>

        <Link to="/" className="flex gap-2 md:gap-3 items-center">
          <div className="bg-black rounded-lg flex items-center justify-center p-1.5">
            <PiWalletBold className="text-white size-5 md:size-6" />
          </div>
          <p className="text-black text-lg md:text-xl font-bold tracking-tight">Wealth Tracker</p>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={getLinkClass}>{link.name}</NavLink>
          ))}
        </nav>
      </div>

      {/* 2. Right Section: Search & Avatar/Auth */}
      <div className="flex items-center gap-3 md:gap-6">
        <div className="relative hidden lg:block">
          <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
          <input 
            type="text" 
            placeholder="Tìm kiếm..." 
            className="bg-gray-100 border-none rounded-xl py-2 pl-10 pr-4 text-sm w-48 xl:w-64 focus:ring-2 focus:ring-gray-200 outline-none"
          />
        </div>

        {!isLoggedIn ? (
          /* TRẠNG THÁI CHƯA ĐĂNG NHẬP */
          <div className="flex items-center gap-2">
            <Link to="/login" className="hidden sm:block text-sm font-semibold text-gray-700 hover:text-black px-4 py-2">
              Đăng nhập
            </Link>
            <Link to="/register" className="text-sm font-semibold bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-all active:scale-95 shadow-sm">
              Bắt đầu ngay
            </Link>
          </div>
        ) : (
          /* TRẠNG THÁI ĐÃ ĐĂNG NHẬP */
          <div className="flex items-center gap-2 md:gap-4">
            {/* Thông báo */}
            <div className="relative p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors group">
              <IoNotificationsOutline className="text-gray-600 size-6 group-hover:text-black" />
              <span className="absolute top-1.5 right-1.5 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                3
              </span>
            </div>

            {/* Avatar dẫn đến Profile */}
            <Link 
              to="/profile" 
              className="group flex items-center gap-2 pl-2 border-l border-gray-200 ml-1"
            >
              <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-tr from-gray-700 to-black text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-transparent group-hover:border-gray-200 transition-all shadow-md">
                NV
              </div>
              <div className="hidden sm:flex flex-col items-start leading-none">
                <span className="text-xs font-bold text-black">Nguyễn Văn</span>
                <span className="text-[10px] text-gray-500">Tài khoản</span>
              </div>
            </Link>
          </div>
        )}
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div className={`absolute top-16 left-0 right-0 bg-white border-b border-gray-200 flex flex-col p-4 gap-2 md:hidden transition-all duration-300 origin-top ${isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}>
        
        {/* Nếu đã đăng nhập trên mobile, hiện User Profile lên đầu menu */}
        {isLoggedIn && (
          <Link 
            to="/profile" 
            className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl mb-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-11 h-11 bg-black text-white rounded-full flex items-center justify-center font-bold">NV</div>
            <div>
              <p className="font-bold text-black leading-none">Nguyễn Văn</p>
              <p className="text-xs text-gray-500 mt-1">Xem chi tiết tài khoản</p>
            </div>
          </Link>
        )}

        {navLinks.map((link) => (
          <NavLink key={link.path} to={link.path} className={getMobileLinkClass} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </NavLink>
        ))}
        
        {!isLoggedIn && (
           <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-100">
              <Link to="/login" className="w-full text-center py-3 font-semibold text-gray-700" onClick={() => setIsMenuOpen(false)}>Đăng nhập</Link>
              <Link to="/register" className="w-full text-center py-3 bg-black text-white rounded-xl font-semibold" onClick={() => setIsMenuOpen(false)}>Bắt đầu ngay</Link>
           </div>
        )}
      </div>
    </header>
  );
};

export default Header;