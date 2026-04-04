
import { PiWalletBold } from "react-icons/pi";
import { HiArrowTrendingUp, HiArrowTrendingDown } from "react-icons/hi2";
import { FaArrowTrendUp } from "react-icons/fa6";

import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from "@/components/ui/card";
import AppButton from "@/components/AppButton";
const StatCard = ({
  title = "Tài sản ròng",
  amount = "500.000.000",
  unit = "đ",
  percentage = "+15%",
  diffAmount = "+35.000.000 đ",
  trend = "up" // "up" hoặc "down"
}) => {
  return (
    <Card className="flex justify-between">
      <CardHeader className="flex-row items-center justify-between">
        <p className="text-gray-400 font-bold">{title}</p>
      </CardHeader>

      <CardContent className="relative">
        <h2 className="text-4xl font-semibold">{amount} đ</h2>
        <div className="absolute right-5 top-0 flex items-center justify-center bg-gray-200 rounded-full w-14 h-14 shadow-inner">
          <PiWalletBold className="size-7 text-gray-800" />
        </div>
      </CardContent>
      <CardFooter className="flex gap-4">
        <div className="rounded-lg flex items-center justify-center bg-green-500/20 text-green-500 p-1 select-none">
          <HiArrowTrendingUp className="size-5" />
          {percentage}
        </div>
        <span className="text-xs text-gray-500">{diffAmount}</span>
      </CardFooter>

    </Card>
  );
};

export default StatCard;