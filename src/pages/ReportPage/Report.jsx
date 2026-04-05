
import CategorySelect from "@/components/CategorySelect";


import { TrendingUp, TrendingDown, PieChart } from "lucide-react";
import { MdOutlineSavings } from "react-icons/md";

import ReportSummary from "./ReportSummary";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import IncomeExpenseSavingsAreaInteractiveChart from "./IncomeExpenseSavingsAreaInteractiveChart";
import AppButton from "@/components/AppButton";
const timeFilterOptions = [
  {
    value: 3,
    label: "3 tháng gần nhất"
  },
  {
    value: 6,
    label: "6 tháng gần nhất"
  },
  {
    value: 12,
    label: "12 tháng gần nhất"
  },
  {
    value: 1, // 1 tượng trung cho năm nay
    label: "Năm nay"
  }
]
const reportSummaryData = [
  {
    id: "total-income",
    title: "Tổng thu nhập",
    amount: 171000000,
    unit: "₫",
    description: "6 tháng gần nhất",
    icon: <TrendingUp className="text-green-500 size-6" />,
    type: "currency"
  },
  {
    id: "total-expense",
    title: "Tổng chi tiêu",
    amount: 124000000,
    unit: "₫",
    description: "6 tháng gần nhất",
    icon: <TrendingDown className="text-red-500 size-6" />,
    type: "currency"
  },
  {
    id: "savings",
    title: "Tiết kiệm",
    amount: 47000000,
    unit: "₫",
    description: "6 tháng gần nhất",
    icon: <MdOutlineSavings className="text-orange-500 size-6" />,
    type: "currency"
  },
  {
    id: "savings-rate",
    title: "Tỷ lệ tiết kiệm",
    amount: 27.5,
    unit: "%",
    description: "Trung bình 6 tháng",
    icon: <PieChart className="text-purple-900 size-6" />,
    type: "percentage"
  }
];
const Report = () => {
  ;
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        {/* Phần Tiêu đề: Luôn nằm bên trái/trên cùng */}
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
            Báo cáo
          </h1>
          <p className="text-sm md:text-base text-gray-500 font-medium">
            Phân tích chi tiết tài chính của bạn
          </p>
        </div>

        {/* Phần Nút bấm: Xếp hàng ngang, co giãn linh hoạt */}
        <div className="flex flex-row items-center gap-3 sm:gap-4">

          <CategorySelect
            placeholder="Chọn thời gian để xem"
            title="Thời gian"
            options={timeFilterOptions}
          />
          <AppButton
            iconType="export"
            variant="default"
          >
            Tải PDF
          </AppButton>
        </div>
      </header>

      {/* chi tiet tai chinh */}
      <ReportSummary
        reportSummaryData={reportSummaryData}
      />

      <IncomeExpenseSavingsAreaInteractiveChart />
    </div>
  )
}
export default Report;