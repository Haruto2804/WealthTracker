
import { Pie, PieChart } from "recharts"
import { ChartLegendContent, ChartLegend, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { asset: "gold", amount: 150000000, fill: "var(--color-gold)" },
  { asset: "stocks", amount: 100000000, fill: "var(--color-stocks)" },
  { asset: "cash", amount: 50000000, fill: "var(--color-cash)" },
  { asset: "realestate", amount: 150000000, fill: "var(--color-realestate)" },
  { asset: "savings", amount: 30000000, fill: "var(--color-savings)" },
  { asset: "crypto", amount: 20000000, fill: "var(--color-crypto)" },
]
const chartConfig = {
  gold: {
    label: "Vàng",
    color: "#fbbf24", // Vàng hổ phách
  },
  stocks: {
    label: "Chứng khoán",
    color: "#3b82f6", // Xanh dương
  },
  cash: {
    label: "Tiền mặt",
    color: "#22c55e", // Xanh lá
  },
  realestate: {
    label: "Bất động sản",
    color: "#f97316", // Cam đậm
  },
  savings: {
    label: "Tiết kiệm",
    color: "#a855f7", // Tím
  },
  crypto: {
    label: "Crypto",
    color: "#06b6d4", // Xanh lơ (Cyan)
  },
}
// sử dụng Pie Chart của Shadcn UI
const AssetAllocation = () => {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-75"
    >
      <PieChart>
        <Pie
          data={chartData}
          dataKey="amount"
          nameKey="asset"


        />
        <ChartLegend
          content={<ChartLegendContent nameKey="asset" />}
          // Dùng grid-cols-2 để ép nó luôn chia 2 cột đều nhau
          className="grid grid-cols-2 gap-x-8 gap-y-2 px-6 py-2 text-xs"
        />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              hideLabel // Ẩn cái label "amount" dư thừa ở trên đầu
              formatter={(value, name) => (
                <div className="flex w-full items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    {/* Chấm màu tự động lấy từ config */}
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: chartConfig[name]?.color }}
                    />
                    <span className="text-muted-foreground">
                      {chartConfig[name]?.label || name}
                    </span>
                  </div>
                  <span className="font-mono font-bold text-foreground">
                    {/* Format VNĐ dùng JS thuần */}
                    {Number(value).toLocaleString("vi-VN")} ₫
                  </span>
                </div>
              )}
            />
          }
        />
      </PieChart>
    </ChartContainer>
  )
}
export default AssetAllocation;
