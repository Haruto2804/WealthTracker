import { CardContent, CardHeader, CardTitle, Card } from "@/components/ui/card";
import { formatVND } from "@/utils";

const ReportSummary = ({reportSummaryData}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {reportSummaryData.map((item) => (
        <Card key={item.id} className="rounded-3xl border-gray-100 shadow-sm transition-all hover:shadow-md">
          <CardHeader className="flex flex-row items-start justify-between pb-4">
            <CardTitle className="text-gray-500 font-medium text-sm md:text-base">
              {item.title}
            </CardTitle>
            {item.icon}
          </CardHeader>

          <CardContent>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-none">
                {item.type === "currency"
                  ? formatVND(item.amount)
                  : formatVND(item.amount)}
              </span>
            </div>

            <p className="text-gray-400 text-xs md:text-sm font-medium">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
export default ReportSummary;