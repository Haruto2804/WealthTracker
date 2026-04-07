import { useState } from "react";
import { PiWalletBold } from "react-icons/pi";
import { MdOutlineArrowForward } from "react-icons/md";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc"; // Thêm icon Google
import AppButton from "@/components/AppButton"; // Dùng component nút của bạn
import { FaGithub } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row max-w-5xl w-full gap-10 items-center">

        {/* BÊN TRÁI: GIỚI THIỆU */}
        <div className="hidden md:flex w-1/2 flex-col gap-6 ">
          <div className="flex gap-3 items-center">
            <div className="bg-black rounded-lg flex items-center justify-center p-2">
              <PiWalletBold className="text-white size-8" />
            </div>
            <div>
              <p className="text-black text-2xl font-bold tracking-tight">Wealth Tracker</p>
              <p className="text-gray-500">Quản lý tài chính thông minh</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { id: "1", title: "Theo dõi chi tiêu", desc: "Ghi chép và phân loại mọi giao dịch một cách dễ dàng" },
              { id: "2", title: "Phân tích thông minh", desc: "Báo cáo chi tiết với biểu đồ trực quan và insights" },
              { id: "3", title: "Quản lý tài sản", desc: "Theo dõi danh mục đầu tư và tài sản của bạn" }
            ].map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="flex items-center justify-center bg-gray-200 h-12 w-12 shrink-0 rounded-md">
                  <MdOutlineArrowForward className="size-5" />
                </div>
                <div>
                  <p className="text-[18px] font-bold">{item.title}</p>
                  <p className="text-gray-500 text-[14px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 italic rounded-lg border bg-white shadow-sm">
            <p className="text-gray-500 text-xs">
              "Wealth Tracker đã giúp tôi tiết kiệm được 30% thu nhập mỗi tháng. Giao diện đẹp, dễ sử dụng và đầy đủ tính năng!"
            </p>
            <div className="font-bold mt-2">- Haruto</div>
          </div>
        </div>

        {/* BÊN PHẢI: FORM ĐĂNG NHẬP */}
        <Card className="w-full md:w-112.5 shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Đăng nhập</CardTitle>
            <CardDescription>
              Nhập email và mật khẩu để truy cập tài khoản
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">

            {/* Field Email */}
            <Field>
              <FieldLabel>Email</FieldLabel>
              <div className="relative flex items-center mt-1">
                <Mail className="absolute left-3 text-gray-400 size-4" />
                <Input
                  type="email"
                  placeholder="name@example.com"
                  className="pl-10 bg-gray-50/50"
                />
              </div>
            </Field>

            {/* Field Mật khẩu */}
            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel>Mật khẩu</FieldLabel>
                <a href="#" className="text-sm text-gray-600 hover:underline">Quên mật khẩu?</a>
              </div>
              <div className="relative flex items-center mt-1">
                <Lock className="absolute left-3 text-gray-400 size-4" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-10 bg-gray-50/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </Field>

            {/* Checkbox Ghi nhớ */}
            <div className="flex items-center space-x-2 mt-1">
            <Checkbox className="cursor-pointer" checked={checked} onCheckedChange={setChecked}/>
              <label htmlFor="remember" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Ghi nhớ đăng nhập
              </label>
            </div>

            {/* Nút Đăng nhập chính */}
            <AppButton className="w-full mt-2 bg-black text-white hover:bg-gray-800">
              Đăng nhập
            </AppButton>

            {/* Đường kẻ ngang "HOẶC TIẾP TỤC VỚI" */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500 font-medium">Hoặc tiếp tục với</span>
              </div>
            </div>

            {/* Nút Social */}
            <div className="grid grid-cols-2 gap-4">
              <AppButton variant="outline" className="w-full flex gap-2">
                <FcGoogle size={20} /> Google
              </AppButton>
              <AppButton variant="outline" className="w-full flex gap-2">
                <FaGithub size={20} /> GitHub
              </AppButton>
            </div>

            {/* Footer */}
            <p className="text-center text-sm text-gray-500 mt-4">
              Chưa có tài khoản?{" "}
              <a href="/register" className="font-bold text-black hover:underline">Đăng ký ngay</a>
            </p>

          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;