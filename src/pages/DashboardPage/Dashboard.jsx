import AppButton from "@/components/AppButton";
import StatCard from "./StatCard";
import { CardHeader, CardTitle, Card, CardContent } from "@/components/ui/card";
import AssetAllocation from "./AssetAllocation";
import BarChartGroup from "./BarChartGroup";
import ExpenseAnalysis from "./ExpenseAnalysis";
import RecentTransaction from "./RecentTransaction";


const chartDataAssets = [
  { asset: "gold", amount: 150000000, fill: "var(--color-gold)" },
  { asset: "stocks", amount: 100000000, fill: "var(--color-stocks)" },
  { asset: "cash", amount: 50000000, fill: "var(--color-cash)" },
  { asset: "realestate", amount: 150000000, fill: "var(--color-realestate)" },
  { asset: "savings", amount: 30000000, fill: "var(--color-savings)" },
  { asset: "crypto", amount: 20000000, fill: "var(--color-crypto)" },
]

const chartDataIncome = [
  { month: 1, income: 25000000, expense: 18000000 },
  { month: 2, income: 28000000, expense: 20000000 },
  { month: 3, income: 30500000, expense: 22000000 },
  { month: 4, income: 27000000, expense: 21000000 },
  { month: 5, income: 29000000, expense: 19500000 },
  { month: 6, income: 32000000, expense: 24000000 },
]
const chartConfigIncome = {
  income: {
    label: "Thu nhập ",
    color: "#22c55e", // Green-500 (Tailwind)
  },
  expense: {
    label: "Chi tiêu ",
    color: "#ef4444", // Red-500 (Tailwind)
  },
}
const Dashboard = () => {
  const totalAmountAsset = chartDataAssets.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0)
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        {/* Phần Tiêu đề: Luôn nằm bên trái/trên cùng */}
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
            Dashboard Tài Chính
          </h1>
          <p className="text-sm md:text-base text-gray-500 font-medium">
            Tổng quan tài sản và giao dịch của bạn
          </p>
        </div>

        {/* Phần Nút bấm: Xếp hàng ngang, co giãn linh hoạt */}
        <div className="flex flex-row items-center gap-3 sm:gap-4">
    
          <AppButton
            iconType="export"
            variant="outline"
          >
            Xuất báo cáo
          </AppButton>
        </div>
      </header>
      <StatCard />
      <div className="flex flex-col md:flex-row gap-4 ">
        <Card className="md:w-1/2 w-full">
          <CardHeader>
            <CardTitle>
              <p className="font-semibold ">Thu nhập và chi tiêu</p>
              <p className="text-[14px] text-green-500">6 tháng gần nhất</p>
            </CardTitle>
          </CardHeader>
          <CardContent >
            <BarChartGroup
              chartData={chartDataIncome}
              chartConfig={chartConfigIncome}
              dataKeys={["income", "expense"]}
            />
          </CardContent>
        </Card>
        <Card className="md:w-1/2 w-full">
          <CardHeader>
            <CardTitle className="flex justify-between">
              <div>
                <p className="font-semibold">Phân bổ tài sản</p>
                <p className="text-[14px] text-green-500">Tổng: {totalAmountAsset.toLocaleString('vi-VN')} VNĐ</p>
              </div>
              <AppButton
                variant="outline"
                iconType="add"
              >
                Thêm tài sản
              </AppButton>
            </CardTitle>
          </CardHeader>
          <CardContent >
            <AssetAllocation
              chartData={chartDataAssets}
            />
          </CardContent>
        </Card>

      </div>
      <div className="w-full">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>
              <p className="font-semibold ">Phân tích chi tiêu</p>
              <p className="text-[14px] text-green-500">6 tháng gần nhất</p>
            </CardTitle>
          </CardHeader>
          <CardContent >
            <ExpenseAnalysis />
          </CardContent>
        </Card>

      </div>
      <div className="w-full">
        <Card
          className="w-full">
          <CardHeader>
            <CardTitle>
              <p className="font-semibold ">Giao dịch gần đây</p>
            </CardTitle>
          </CardHeader>
          <CardContent >
            <RecentTransaction />
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
export default Dashboard;