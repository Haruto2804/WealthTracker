"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const chartData = [
  // --- THÁNG 4 ---
  { date: "2024-04-01", income: 15000000, expense: 2000000, savings: 13000000 },
  { date: "2024-04-02", income: 0, expense: 450000, savings: -450000 },
  { date: "2024-04-03", income: 0, expense: 320000, savings: -320000 },
  { date: "2024-04-04", income: 500000, expense: 200000, savings: 300000 },
  { date: "2024-04-06", income: 0, expense: 800000, savings: -800000 },
  { date: "2024-04-08", income: 0, expense: 1200000, savings: -1200000 },
  { date: "2024-04-10", income: 2000000, expense: 500000, savings: 1500000 },
  { date: "2024-04-12", income: 0, expense: 400000, savings: -400000 },
  { date: "2024-04-15", income: 0, expense: 5000000, savings: -5000000 }, // Đóng tiền nhà/học
  { date: "2024-04-18", income: 0, expense: 300000, savings: -300000 },
  { date: "2024-04-21", income: 1200000, expense: 600000, savings: 600000 },
  { date: "2024-04-25", income: 0, expense: 900000, savings: -900000 },
  { date: "2024-04-28", income: 0, expense: 450000, savings: -450000 },
  { date: "2024-04-30", income: 0, expense: 200000, savings: -200000 },

  // --- THÁNG 5 ---
  { date: "2024-05-01", income: 16500000, expense: 2500000, savings: 14000000 },
  { date: "2024-05-03", income: 0, expense: 600000, savings: -600000 },
  { date: "2024-05-05", income: 0, expense: 400000, savings: -400000 },
  { date: "2024-05-07", income: 800000, expense: 300000, savings: 500000 },
  { date: "2024-05-10", income: 0, expense: 1100000, savings: -1100000 },
  { date: "2024-05-12", income: 0, expense: 550000, savings: -550000 },
  { date: "2024-05-15", income: 3000000, expense: 1000000, savings: 2000000 },
  { date: "2024-05-18", income: 0, expense: 2200000, savings: -2200000 },
  { date: "2024-05-20", income: 0, expense: 400000, savings: -400000 },
  { date: "2024-05-22", income: 0, expense: 300000, savings: -300000 },
  { date: "2024-05-25", income: 1500000, expense: 800000, savings: 700000 },
  { date: "2024-05-28", income: 0, expense: 500000, savings: -500000 },
  { date: "2024-05-31", income: 0, expense: 700000, savings: -700000 },

  // --- THÁNG 6 ---
  { date: "2024-06-01", income: 15800000, expense: 2100000, savings: 13700000 },
  { date: "2024-06-02", income: 0, expense: 500000, savings: -500000 },
  { date: "2024-06-04", income: 0, expense: 350000, savings: -350000 },
  { date: "2024-06-06", income: 1200000, expense: 400000, savings: 800000 },
  { date: "2024-06-08", income: 0, expense: 1500000, savings: -1500000 },
  { date: "2024-06-11", income: 0, expense: 600000, savings: -600000 },
  { date: "2024-06-13", income: 0, expense: 450000, savings: -450000 },
  { date: "2024-06-15", income: 2500000, expense: 5000000, savings: -2500000 }, // Mua sắm
  { date: "2024-06-18", income: 0, expense: 300000, savings: -300000 },
  { date: "2024-06-20", income: 0, expense: 850000, savings: -850000 },
  { date: "2024-06-22", income: 1000000, expense: 400000, savings: 600000 },
  { date: "2024-06-25", income: 0, expense: 700000, savings: -700000 },
  { date: "2024-06-27", income: 0, expense: 3000000, savings: -3000000 }, // Thanh toán hóa đơn
  { date: "2024-06-29", income: 0, expense: 500000, savings: -500000 },
  { date: "2024-06-30", income: 500000, expense: 1200000, savings: -700000 },
];

const chartConfig = {
  income: {
    label: "Thu nhập",
    color: "#3b82f6", // Blue-500 (Xanh dương)
  },
  expense: {
    label: "Chi tiêu",
    color: "#f97316", // Orange-500 (Màu ô/cam - nổi bật và dễ nhìn)
  },
  savings: {
    label: "Tiết kiệm",
    color: "#8b5cf6", // Violet-500 (Tím)
  }
};

export function IncomeExpenseSavingsAreaInteractiveChart() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = React.useMemo(() => {
    return chartData.filter((item) => {
      const date = new Date(item.date)
      const referenceDate = new Date("2024-06-30")
      let daysToSubtract = 90
      if (timeRange === "30d") daysToSubtract = 30
      if (timeRange === "7d") daysToSubtract = 7
      
      const startDate = new Date(referenceDate)
      startDate.setDate(startDate.getDate() - daysToSubtract)
      return date >= startDate
    })
  }, [timeRange]);

  return (
    <Card className="w-full border-none shadow-none">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Phân tích Thu nhập & Chi tiêu</CardTitle>
          <CardDescription>
            Dữ liệu chi tiết biến động tài chính trong {timeRange === "90d" ? "3 tháng" : timeRange === "30d" ? "30 ngày" : "7 ngày"} qua
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[160px] rounded-lg sm:ml-auto" aria-label="Chọn khoảng thời gian">
            <SelectValue placeholder="3 tháng gần nhất" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d">3 tháng gần nhất</SelectItem>
            <SelectItem value="30d">30 ngày gần nhất</SelectItem>
            <SelectItem value="7d">7 ngày gần nhất</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[350px] w-full">
          <AreaChart data={filteredData}>
            <defs>
              {Object.keys(chartConfig).map((key) => (
                <linearGradient key={key} id={`fill${key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartConfig[key].color} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={chartConfig[key].color} stopOpacity={0} />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.5} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={12}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("vi-VN", { month: "short", day: "numeric" })
              }}
            />
            <YAxis 
              tickLine={false} 
              axisLine={false} 
              tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
            />
            <ChartTooltip
              cursor={{ stroke: '#cbd5e1', strokeWidth: 1 }}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => new Date(value).toLocaleDateString("vi-VN", {
                    day: "numeric", month: "long", year: "numeric"
                  })}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="income"
              type="monotone"
              fill={chartConfig.income.color}
              stroke={chartConfig.income.color}
              strokeWidth={2}
            />
            <Area
              dataKey="expense"
              type="monotone"
              fill={chartConfig.expense.color}
              stroke={chartConfig.expense.color}
              strokeWidth={2}
            />
             <Area
              dataKey="savings"
              type="monotone"
              fill={chartConfig.savings.color}
              stroke={chartConfig.savings.color}
              strokeWidth={2}
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
export default IncomeExpenseSavingsAreaInteractiveChart;