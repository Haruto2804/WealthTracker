import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import { formatVND } from "@/utils";

const BarChartGroup = ({
  chartData = [],
  chartConfig,
  dataKeys = [], // Mảng chứa các key muốn vẽ cột, ví dụ: ["income", "expense"]
  showLegend = true
}) => {
  return (
    <ChartContainer config={chartConfig} className="min-h-50 w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.5} />

        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />

        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          tickFormatter={(value) => `${value / 1000000}M`}
          fontSize={12}
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
                    {formatVND(value)}
                  </span>
                </div>
              )}
            />
          }
        />

        {showLegend && <ChartLegend content={<ChartLegendContent />} />}
        {dataKeys.map((key) => (
          <Bar
            key={key}
            dataKey={key}
            // Tự động lấy màu từ config dựa trên tên key
            fill={chartConfig[key]?.color || "var(--color-primary)"}
            radius={[4, 4, 0, 0]}
          />
        ))}
      </BarChart>
    </ChartContainer>
  )
}

export default BarChartGroup;