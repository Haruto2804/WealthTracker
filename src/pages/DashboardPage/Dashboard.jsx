import AppButton from "@/components/AppButton";
import StatCard from "./StatCard";
import IncomeExpenseChart from "./IncomeExpenseChart";
import { CardHeader, CardTitle, Card, CardContent, CardFooter } from "@/components/ui/card";
import AssetAllocation from "./AssetAllocation";


const Dashboard = () => {
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
            iconType="add"
            variant="default"
          >
            Thêm giao dịch
          </AppButton>

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
            <IncomeExpenseChart />
          </CardContent>
        </Card>
        <Card className="md:w-1/2 w-full">
          <CardHeader>
            <CardTitle className="flex justify-between">
              <div>
                <p className="font-semibold">Phân bổ tài sản</p>
                <p className="text-[14px] text-green-500">Tổng: 15000000 VNĐ</p>
              </div>
            <AppButton 
            variant = "outline"
            iconType="add"
            >
              Thêm tài sản
            </AppButton>
            </CardTitle>
          </CardHeader>
          <CardContent >
            <AssetAllocation />
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
export default Dashboard;