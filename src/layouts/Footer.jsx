
import { PiWalletBold } from "react-icons/pi";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const Footer = () => {
  // 1. Định nghĩa dữ liệu cho các cột menu
  const footerSections = [
    {
      title: "Khám phá",
      links: [
        { name: "Dự án cá nhân", href: "/projects" },
        { name: "Kỹ năng & Công nghệ", href: "/skills" },
        { name: "Kinh nghiệm làm việc", href: "/experience" },
        { name: "Blog chia sẻ", href: "/blog" }
      ],
    },
    {
      title: "Dịch vụ",
      links: [
        { name: "Thiết kế UI/UX", href: "#" },
        { name: "Phát triển Web", href: "#" },
        { name: "Tư vấn kiến trúc phần mềm", href: "#" },
        { name: "Dạy kèm lập trình", href: "#" }
      ],
    }
  ];

  const socialLinks = [
    {
      href: "https://github.com/Haruto2804",
      icon: <FaGithub size={18} />,
      hoverClass: "hover:text-black hover:border-black"
    },
    {
      href: "https://www.facebook.com/baodaydunglo",
      icon: <FaFacebook size={18} />,
      hoverClass: "hover:text-[#1877F2] hover:border-[#1877F2]"
    },
    {
      href: "https://zalo.me/0394037350",
      icon: <SiZalo size={18} />,
      hoverClass: "hover:text-blue-500 hover:border-blue-500"
    },
  ];

  return (
    <footer className="w-full py-10 px-6 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 place-items-center">

        {/* Cột 1: Logo & Giới thiệu */}
        <div className="space-y-4">
          <div className="flex gap-3 items-center">
            <div className="bg-black rounded-lg flex items-center justify-center p-1.5">
              <PiWalletBold className="text-white size-6" />
            </div>
            <p className="text-black text-xl font-bold tracking-tight">Wealth Tracker</p>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Quản lý tài chính cá nhân thông minh, giúp bạn kiểm soát chi tiêu và đầu tư hiệu quả.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                className={`
                  t
        p-2 border rounded-lg text-gray-400 border-gray-200
        transition-all duration-300 ease-in-out
        hover:bg-white hover:-translate-y-1 hover:shadow-md
        ${social.hoverClass}
      `}
              >
                {/* Đảm bảo icon nhận màu từ text của thẻ cha qua currentColor */}
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Cột 2, 3, 4: Duyệt qua mảng footerSections */}
        <div className="md:col-span-3 flex flex-wrap gap-5">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold mb-4 text-black">{section.title}</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href}
                      target="_blank"
                      className="hover:text-black transition-colors cursor-pointer">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Dòng Copyright */}
      <div className="mt-10 pt-6 border-t border-gray-100 text-center text-gray-400 text-sm">
        © 2026 Wealth Tracker. All rights reserved. Copyright by Haruto.
      </div>
    </footer>
  );
};

export default Footer;