import AppButton from "@/components/AppButton";


const Dashboard = () => {
  return (
    <>
      <header className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold">Dashboard Tài Chính</p>
          <p className="text-gray-500">Tổng quan tài sản và giao dịch của bạn</p>
        </div>
        <div className="flex gap-5">
          <AppButton
            iconType="add"
            variant="default"
          >
            Thêm giao dịch
          </AppButton>
          <AppButton
            iconType="export"
            variant="default"
          >
            Xuất giao dịch
          </AppButton>
        </div>
      </header>
    </>
  )
}
export default Dashboard;