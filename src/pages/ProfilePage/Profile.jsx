import { useState } from "react";
import { 
  IoPersonOutline, IoShieldCheckmarkOutline, IoNotificationsOutline, 
  IoCardOutline, IoLogOutOutline, IoCameraOutline, IoWalletOutline 
} from "react-icons/io5";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("general");

  const menuItems = [
    { id: "general", name: "Thông tin cá nhân", icon: <IoPersonOutline size={20} /> },
    { id: "finance", name: "Thiết lập tài chính", icon: <IoWalletOutline size={20} /> },
    { id: "security", name: "Bảo mật & Mật khẩu", icon: <IoShieldCheckmarkOutline size={20} /> },
    { id: "notifications", name: "Thông báo", icon: <IoNotificationsOutline size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-10 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* --- SIDEBAR --- */}
        <aside className="w-full md:w-64 flex flex-col gap-2">
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">NV</div>
              <div>
                <p className="font-bold text-gray-900">Nguyễn Văn</p>
                <p className="text-xs text-gray-500">Thành viên Premium</p>
              </div>
            </div>
          </div>

          <nav className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                  activeTab === item.id 
                    ? "bg-black text-white shadow-md" 
                    : "text-gray-600 hover:bg-white hover:text-black"
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-red-500 hover:bg-red-50 transition-all mt-4">
              <IoLogOutOutline size={20} />
              Đăng xuất
            </button>
          </nav>
        </aside>

        {/* --- MAIN CONTENT --- */}
        <main className="flex-1 bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
          
          {activeTab === "general" && (
            <section className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <h2 className="text-2xl font-bold mb-6">Thông tin cá nhân</h2>
              
              <div className="flex flex-col items-center md:items-start gap-6 mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gray-200 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-3xl font-bold text-gray-400">
                    NV
                  </div>
                  <button className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full border-2 border-white hover:scale-110 transition-transform">
                    <IoCameraOutline size={18} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Họ và tên</label>
                  <input type="text" defaultValue="Nguyễn Văn" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input type="email" defaultValue="van.nguyen@example.com" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black outline-none transition-all" />
                </div>
              </div>
            </section>
          )}

          {activeTab === "finance" && (
            <section className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <h2 className="text-2xl font-bold mb-2">Thiết lập tài chính</h2>
              <p className="text-gray-500 mb-8 text-sm">Tùy chỉnh cách bạn quản lý dòng tiền của mình.</p>
              
              <div className="space-y-6">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900">Tiền tệ chính</p>
                    <p className="text-xs text-gray-500">Đơn vị hiển thị trên toàn bộ báo cáo</p>
                  </div>
                  <select className="bg-white border border-gray-200 p-2 rounded-lg font-semibold outline-none">
                    <option>VNĐ (₫)</option>
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                  </select>
                </div>

                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900">Hạn mức chi tiêu tháng</p>
                    <p className="text-xs text-gray-500">Cảnh báo khi chi vượt ngưỡng này</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="text" defaultValue="15,000,000" className="w-32 p-2 text-right bg-white border border-gray-200 rounded-lg font-bold outline-none focus:ring-2 focus:ring-black" />
                    <span className="font-bold text-sm text-gray-600">₫</span>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900">Ví liên kết</p>
                    <p className="text-xs text-gray-500">Quản lý các tài khoản ngân hàng đã kết nối</p>
                  </div>
                  <button className="text-sm font-bold text-black border border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-all">
                    Quản lý
                  </button>
                </div>
              </div>
            </section>
          )}

          <div className="mt-12 pt-6 border-t border-gray-100 flex justify-end gap-3">
            <button className="px-6 py-2.5 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-all">Hủy</button>
            <button className="px-6 py-2.5 bg-black text-white rounded-xl font-bold shadow-lg hover:bg-gray-800 transition-all active:scale-95">
              Lưu thay đổi
            </button>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Profile;