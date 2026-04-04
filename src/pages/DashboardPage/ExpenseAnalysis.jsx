"use client"

import * as React from "react"
import { Bar, BarChart, XAxis, CartesianGrid } from "recharts"


import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart"
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart"

const chartData = [
  { date: "2024-01", food: 4500000, transport: 1200000, entertainment: 800000, shopping: 2500000, bills: 3000000, other: 500000 },
  { date: "2024-02", food: 3800000, transport: 1500000, entertainment: 1200000, shopping: 1800000, bills: 2800000, other: 700000 },
  { date: "2024-03", food: 5200000, transport: 1100000, entertainment: 600000, shopping: 3000000, bills: 3200000, other: 400000 },
  { date: "2024-04", food: 4100000, transport: 1300000, entertainment: 1500000, shopping: 2200000, bills: 2900000, other: 900000 },
  { date: "2024-05", food: 4800000, transport: 1400000, entertainment: 900000, shopping: 2700000, bills: 3100000, other: 600000 },
];

const chartConfig = {
  food: { label: "Ăn uống", color: "#22c55e" },
  transport: { label: "Di chuyển", color: "#3b82f6" },
  entertainment: { label: "Giải trí", color: "#a855f7" },
  shopping: { label: "Mua sắm", color: "#f97316" },
  bills: { label: "Hóa đơn", color: "#ef4444" },
  other: { label: "Khác", color: "#64748b" },
};

const dataKeys = ["food", "transport", "entertainment", "shopping", "bills", "other"];

const ExpenseAnalysis = () => {
  return (
    <>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.5} />
          <XAxis
            dataKey="date"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => {
              const date = new Date(value);
              return `T${date.getMonth() + 1}/${date.getFullYear()}`;
            }}
          />

          {dataKeys.map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              stackId="a"
              fill={chartConfig[key].color}
              radius={index === dataKeys.length - 1 ? [4, 4, 0, 0] : [0, 0, 0, 0]}
            />
          ))}

          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                hideLabel
                className="w-52"
                formatter={(value, name, item, index) => (
                  <>
                    <div
                      className="h-2.5 w-2.5 shrink-0 rounded-xs"
                      style={{
                        backgroundColor: chartConfig[name]?.color,
                      }}
                    />
                    <span className="text-muted-foreground">
                      {chartConfig[name]?.label || name}
                    </span>
                    <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium text-foreground tabular-nums">
                      {value.toLocaleString()}
                      <span className="font-normal text-muted-foreground ml-1 text-[10px]">
                        VNĐ
                      </span>
                    </div>

                    {/* Hiển thị Tổng cộng sau khi đã render hết 6 danh mục (index 0 đến 5) */}
                    {index === dataKeys.length - 1 && (
                      <div className="mt-1.5 flex basis-full items-center border-t border-dashed pt-1.5 text-xs font-bold text-foreground">
                        Tổng cộng
                        <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums">
                          {Object.values(item.payload)
                            .filter(val => typeof val === 'number')
                            .reduce((acc, curr) => acc + curr, 0)
                            .toLocaleString()}
                          <span className="font-normal text-muted-foreground ml-1 text-[10px]">
                            VNĐ
                          </span>
                        </div>
                      </div>
                    )}
                  </>
                )}
              />
            }
          />

          <ChartLegend content={<ChartLegendContent />} />
        </BarChart>

      </ChartContainer>
    </>
  )
}

export default ExpenseAnalysis;