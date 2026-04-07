import { useState } from "react";
import { PiWalletBold } from "react-icons/pi";
import { MdOutlineArrowForward } from "react-icons/md";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import AppButton from "@/components/AppButton";
import { Checkbox } from "@/components/ui/checkbox"

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row max-w-5xl w-full gap-10 items-center">

        {/* BÊN TRÁI: GIỚI THIỆU (Giữ nguyên như trang Login để đồng bộ) */}
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
            <div className="flex gap-4">
              <div className="flex items-center justify-center bg-gray-200 h-12 w-12 shrink-0 rounded-md">
                <MdOutlineArrowForward className="size-5" />
              </div>
              <div>
                <p className="text-[18px] font-bold">Bắt đầu miễn phí</p>
                <p className="text-gray-500 text-[14px]">Tạo tài khoản chỉ trong vài giây và trải nghiệm đầy đủ tính năng.</p>
              </div>
            </div>
          </div>
        </div>

        {/* BÊN PHẢI: FORM ĐĂNG KÝ */}
        <Card className="w-full md:w-[480px] shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Đăng ký</CardTitle>
            <CardDescription>Tạo tài khoản mới để bắt đầu sử dụng</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">

            {/* Họ và tên */}
            <Field>
              <FieldLabel>Họ và tên</FieldLabel>
              <div className="relative flex items-center mt-1">
                <User className="absolute left-3 text-gray-400 size-4" />
                <Input placeholder="Nguyễn Văn A" className="pl-10 bg-gray-50/50" />
              </div>
            </Field>

            {/* Email */}
            <Field>
              <FieldLabel>Email</FieldLabel>
              <div className="relative flex items-center mt-1">
                <Mail className="absolute left-3 text-gray-400 size-4" />
                <Input type="email" placeholder="name@example.com" className="pl-10 bg-gray-50/50" />
              </div>
            </Field>

            {/* Mật khẩu */}
            <Field>
              <FieldLabel>Mật khẩu</FieldLabel>
              <div className="relative flex items-center mt-1">
                <Lock className="absolute left-3 text-gray-400 size-4" />
                <Input
                  type={showPass ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-10 bg-gray-50/50"
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 text-gray-400">
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </Field>

            {/* Xác nhận mật khẩu */}
            <Field>
              <FieldLabel>Xác nhận mật khẩu</FieldLabel>
              <div className="relative flex items-center mt-1">
                <Lock className="absolute left-3 text-gray-400 size-4" />
                <Input
                  type={showConfirmPass ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-10 bg-gray-50/50"
                />
                <button type="button" onClick={() => setShowConfirmPass(!showConfirmPass)} className="absolute right-3 text-gray-400">
                  {showConfirmPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </Field>

            {/* Điều khoản */}
            <div className="flex items-center space-x-2 mt-1">
              <Checkbox checked={checked} onCheckedChange={setChecked}/>
              <label htmlFor="terms" className="text-sm text-gray-600">
                Tôi đồng ý với <span className="underline cursor-pointer">Điều khoản dịch vụ</span> và <span className="underline cursor-pointer">Chính sách bảo mật</span>
              </label>
            </div>

            <AppButton className="w-full mt-2 bg-black text-white hover:bg-gray-800">
              Đăng ký ngay
            </AppButton>

            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t"></span></div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Hoặc đăng ký với</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <AppButton variant="outline" className="w-full flex gap-2">
                <FcGoogle size={20} /> Google
              </AppButton>
              <AppButton variant="outline" className="w-full flex gap-2">
                <FaGithub size={20} /> GitHub
              </AppButton>
            </div>

            <p className="text-center text-sm text-gray-500 mt-2">
              Đã có tài khoản?{" "}
              <a href="/login" className="font-bold text-black hover:underline">Đăng nhập</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;