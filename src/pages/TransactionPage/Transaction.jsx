import AppButton from "@/components/AppButton";
import { Card, CardFooter, CardTitle, CardContent, CardHeader, CardDescription } from "@/components/ui/card";
import { IoMdTrendingUp, IoMdTrendingDown } from "react-icons/io";
import { PiMoneyDuotone } from "react-icons/pi";
import TransactionList from "./TransactionList";
import AddTransactionModal from "@/components/AddTransactionModal";
import { Input } from "@/components/ui/input";
import CategorySelect from "@/components/CategorySelect";

const CATEGORY_OPTIONS = [
  { label: "Ăn uống", value: "dining" },
  { label: "Di chuyển", value: "transportation" },
  { label: "Giải trí", value: "entertainment" },
  { label: "Mua sắm", value: "shopping" },
  { label: "Hóa đơn", value: "bills" },
  { label: "Khác", value: "others" },
];
const TRANSACTION_TYPES = [
  { label: "Thu nhập", value: "income" },
  { label: "Chi tiêu", value: "expense" },
];
const transactionData = [
  {
    id: 1,
    date: "03/04/2026",
    description: "Lương tháng 3",
    category: "Thu nhập",
    type: "income", // Thu nhập
    amount: 32000000
  },
  {
    id: 2,
    date: "02/04/2026",
    description: "Mua sắm Grab",
    category: "Mua sắm",
    type: "expense", // Chi tiêu
    amount: -850000
  },
  {
    id: 3,
    date: "01/04/2026",
    description: "Tiền điện tháng 3",
    category: "Hóa đơn",
    type: "expense",
    amount: -1200000
  },
  {
    id: 4,
    date: "31/03/2026",
    description: "Đầu tư cổ phiếu",
    category: "Đầu tư",
    type: "expense",
    amount: -5000000
  },
  {
    id: 5,
    date: "30/03/2026",
    description: "Ăn tối nhà hàng",
    category: "Ăn uống",
    type: "expense",
    amount: -1500000
  },
  {
    id: 6,
    date: "28/03/2026",
    description: "Freelance project",
    category: "Thu nhập",
    type: "income",
    amount: 15000000
  },
  {
    id: 7,
    date: "27/03/2026",
    description: "Taxi đi làm",
    category: "Di chuyển",
    type: "expense",
    amount: -450000
  },
  {
    id: 8,
    date: "26/03/2026",
    description: "Xem phim",
    category: "Giải trí",
    type: "expense",
    amount: -280000
  },
  {
    id: 9,
    date: "25/03/2026",
    description: "Mua sách",
    category: "Mua sắm",
    type: "expense",
    amount: -350000
  },
  {
    id: 10,
    date: "24/03/2026",
    description: "Bonus",
    category: "Thu nhập",
    type: "income",
    amount: 5000000
  }
];
const Transaction = () => {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        {/* Phần Tiêu đề: Luôn nằm bên trái/trên cùng */}
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
            Giao dịch
          </h1>
          <p className="text-sm md:text-base text-gray-500 font-medium">
            Quản lý tất cả giao dịch thu chi của bạn
          </p>
        </div>
        {/* Phần Nút bấm: Xếp hàng ngang, co giãn linh hoạt */}
        <div className="flex flex-row items-center gap-3 sm:gap-4">
          <AddTransactionModal
            trigger={
              <AppButton
                iconType="add"
                variant="default"
              >
                Thêm giao dịch
              </AppButton>
            }
          />

          <AppButton
            iconType="export"
            variant="outline"
          >
            Xuất Excel
          </AppButton>
        </div>

      </header>
      <div className="flex gap-3 justify-between flex-wrap ">
        <Card className="w-full max-w-sm p-6 mx-auto">

          <CardTitle className="flex items-center justify-between pb-2">
            <p className="text-sm font-medium text-gray-500">Tổng thu nhập</p>
          </CardTitle>

          <CardFooter className="flex items-end justify-between pt-2">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-extrabold text-green-500 tracking-tight">
                52.000.000 ₫
              </span>
              <p className="text-xs text-gray-400">+12% so với tháng trước</p>
            </div>

            <div className="bg-green-100 p-2 rounded-full">
              <IoMdTrendingUp className="text-green-500 size-6" />
            </div>
          </CardFooter>

        </Card>
        <Card className="w-full max-w-sm p-6 mx-auto">

          <CardTitle className="flex items-center justify-between pb-2">
            <p className="text-sm font-medium text-gray-500">Tổng chi tiêu</p>
          </CardTitle>

          <CardFooter className="flex items-end justify-between pt-2">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-extrabold text-red-500 tracking-tight">
                52.000.000 ₫
              </span>
              <p className="text-xs text-gray-400">+12% so với tháng trước</p>
            </div>

            <div className="bg-red-100 p-2 rounded-full">
              <IoMdTrendingDown className="text-red-500 size-6" />
            </div>
          </CardFooter>

        </Card>
        <Card className="w-full max-w-sm p-6 mx-auto">

          <CardTitle className="flex items-center justify-between pb-2">
            <p className="text-sm font-medium text-gray-500">Chênh lệch</p>
          </CardTitle>

          <CardFooter className="flex items-end justify-between pt-2">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-extrabold text-yellow-500 tracking-tight">
                52.000.000 ₫
              </span>
            </div>

            <div className="bg-yellow-100 p-2 rounded-full">
              <PiMoneyDuotone className="text-yellow-500 size-6" />
            </div>
          </CardFooter>

        </Card>

      </div>
      <div className="w-full ">
        <Card
          className="w-full">
          <CardHeader>
            <CardTitle>
              <p className="font-semibold ">Danh sách giao dịch</p>
            </CardTitle>
          </CardHeader>
          <CardDescription className="ml-6">
            <p className="text-gray-500">10 giao dịch</p>
          </CardDescription>
          <CardContent >

            <div className="flex flex-col md:flex-row gap-3">
              <Input placeholder="Tìm kiếm giao dịch" />
              <div className="flex gap-3">
                <CategorySelect
                  title="Danh mục"
                  options={CATEGORY_OPTIONS}
                />
                <CategorySelect
                  title="Loại"
                  options={TRANSACTION_TYPES}
                />
              </div>

            </div>

            <TransactionList
            transactionData = {transactionData}
            />
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
export default Transaction;