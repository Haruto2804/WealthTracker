import AppButton from "@/components/AppButton";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatVND } from "@/utils";
import AssetList from "./AssetList";



const currentAsset = 500000000;
const goalAsset = 600000000;
import {
  AiFillGolden,
  AiOutlineStock,
  AiOutlineWallet,
  AiOutlineHome,
  AiOutlineBank,
  AiOutlineGlobal
} from "react-icons/ai";
import AssetAllocation from "../DashboardPage/AssetAllocation";
import AddAssetModal from "@/components/AddAssetModal";

const chartDataAssets = [
  { asset: "gold", amount: 150000000, fill: "var(--color-gold)" },
  { asset: "stocks", amount: 100000000, fill: "var(--color-stocks)" },
  { asset: "cash", amount: 50000000, fill: "var(--color-cash)" },
  { asset: "realestate", amount: 150000000, fill: "var(--color-realestate)" },
  { asset: "savings", amount: 30000000, fill: "var(--color-savings)" },
  { asset: "crypto", amount: 20000000, fill: "var(--color-crypto)" },
]
const assetListData = [
  {
    id: "gold",
    title: "Vàng",
    amount: 150000000,
    percentage: 30,
    icon: <AiFillGolden className="size-6 text-yellow-500" />,
    color: "bg-yellow-100",
  },
  {
    id: "stocks",
    title: "Chứng khoán",
    amount: 100000000,
    percentage: 20,
    icon: <AiOutlineStock className="size-6 text-blue-500" />,
    color: "bg-blue-100",
  },
  {
    id: "cash",
    title: "Tiền mặt",
    amount: 50000000,
    percentage: 10,
    icon: <AiOutlineWallet className="size-6 text-green-500" />,
    color: "bg-green-100",
  },
  {
    id: "realestate",
    title: "Bất động sản",
    amount: 200000000,
    percentage: 40,
    icon: <AiOutlineHome className="size-6 text-orange-500" />,
    color: "bg-orange-100",
  },
  {
    id: "savings",
    title: "Tiết kiệm",
    amount: 80000000,
    percentage: 15,
    icon: <AiOutlineBank className="size-6 text-indigo-500" />,
    color: "bg-indigo-100",
  },
  {
    id: "crypto",
    title: "Crypto",
    amount: 20000000,
    percentage: 5,
    icon: <AiOutlineGlobal className="size-6 text-purple-500" />,
    color: "bg-purple-100",
  },
];
const Asset = () => {
  const percentage = goalAsset > 0
    ? Math.min(100, Math.round((currentAsset / goalAsset) * 100))
    : 0;
  // const totalAmountAsset = chartDataAssets.reduce((acc, curr) => {
  //   return acc + curr.amount;
  // }, 0)
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        {/* Phần Tiêu đề: Luôn nằm bên trái/trên cùng */}
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
            Dashboard Tài sản
          </h1>
          <p className="text-sm md:text-base text-gray-500 font-medium">
            Quản lý và theo dõi danh mục tài sản của bạn
          </p>
        </div>
        {/* Phần Nút bấm: Xếp hàng ngang, co giãn linh hoạt */}
        <div className="flex flex-row items-center gap-3 sm:gap-4">

          <AddAssetModal
            trigger={
              <AppButton
                iconType="add"
                variant="outline"
              >
                Thêm tài sản
              </AppButton>
            }
          />
          <AppButton
            iconType="export"
            variant="outline"
          >
            Xuất báo cáo
          </AppButton>
        </div>
      </header>
      <div className="grid">
        <Card >
          <CardTitle>
            <h3 className="text-sm font-medium text-gray-500 ml-7">Tổng tài sản</h3>
          </CardTitle>
          <CardContent>
            <div className="flex items-end gap-1">
              <span className="text-5xl font-extrabold text-gray-950 tracking-tight leading-none">
                {formatVND(currentAsset)}
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <div className="space-y-3 w-full">
              {/* Hàng ngang chứa Mục tiêu và Số % */}
              <div className="flex items-center justify-between text-sm text-gray-600 ">

                <p>Mục tiêu: {formatVND(goalAsset)}</p>
                <span className=" font-semibold text-gray-900">{percentage}%</span>
              </div>

              {/* 4. Progress Bar (Thanh tiến độ) */}
              {/* Nền thanh (Xám nhạt) */}
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gray-950 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="w-full">
        <Card
          className="w-full">
          <CardHeader>
            <CardTitle>
              <p className="font-semibold ">Danh sách tài sản</p>
            </CardTitle>
          </CardHeader>
          <CardContent >
            <AssetList
              assetList={assetListData}
            />
          </CardContent>
        </Card>
      </div>
      <div className="w-full">
        <Card >
          <CardHeader>
            <CardTitle className="flex justify-between">
              <div>
                <p className="font-semibold">Phân bổ danh mục tài sản</p>
                <p className="text-[14px] text-green-500">Tỷ lệ phần trăm theo loại tài sản</p>
              </div>
              <AddAssetModal
                trigger={<AppButton
                  variant="outline"
                  iconType="add"
                >
                  Thêm tài sản
                </AppButton>}
              />

            </CardTitle>
          </CardHeader>
          <CardContent >
            <AssetAllocation
              chartData={chartDataAssets}
            />

          </CardContent>
        </Card>
        <AddAssetModal
          isOpen={true}
        />
      </div>
    </div>
  )
}
export default Asset;