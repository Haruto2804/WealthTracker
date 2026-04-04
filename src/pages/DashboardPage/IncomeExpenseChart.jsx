import { Bar, BarChart, XAxis, YAxis,CartesianGrid } from "recharts"
import { ChartContainer } from "@/components/ui/chart"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart"

const chartData = [
  { month: 1, income: 25000000, expense: 18000000 },
  { month: 2, income: 28000000, expense: 20000000 },
  { month: 3, income: 30500000, expense: 22000000 },
  { month: 4, income: 27000000, expense: 21000000 },
  { month: 5, income: 29000000, expense: 19500000 },
  { month: 6, income: 32000000, expense: 24000000 },
]
const chartConfig = {
  income: {
    label: "Thu nhập ",
    color: "#22c55e", // Green-500 (Tailwind)
  },
  expense: {
    label: "Chi tiêu ",
    color: "#ef4444", // Red-500 (Tailwind)
  },
}

const IncomeExpenseChart = () => {
  return (
    <ChartContainer
      config={chartConfig} className="min-h-50 w-full">
      <BarChart accessibilityLayer data={chartData}>

        <ChartTooltip
          content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="income" fill={chartConfig.income.color} radius={4} />
        <Bar dataKey="expense" fill={chartConfig.expense.color} radius={4} />
        <CartesianGrid vertical={false} />

        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => `Tháng ${value}`}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          // Hàm định dạng: 28,000,000 -> 28M
          tickFormatter={(value) => `${value / 1000000}M`}
          fontSize={12}
        />
      </BarChart>
    </ChartContainer>
  )
}
export default IncomeExpenseChart;