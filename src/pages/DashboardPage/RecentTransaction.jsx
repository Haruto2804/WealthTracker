
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatVND } from "@/utils";

const invoices = [
  { date: "04/04/2026", status: "Đã thanh toán", category: "Thẻ tín dụng", amount: 6250000 },
  { date: "05/04/2026", status: "Chờ xử lý", category: "Ví PayPal", amount: 3750000 },
  { date: "06/04/2026", status: "Chưa thanh toán", category: "Chuyển khoản", amount: 8750000 },
  { date: "07/04/2026", status: "Đã thanh toán", category: "Thẻ tín dụng", amount: 11250000 },
  { date: "08/04/2026", status: "Đã thanh toán", category: "Ví PayPal", amount: 13750000 },
  { date: "09/04/2026", status: "Chờ xử lý", category: "Chuyển khoản", amount: 5000000 },
  { date: "10/04/2026", status: "Chưa thanh toán", category: "Thẻ tín dụng", amount: 7500000 }
];
const statusStyles = {
  "Đã thanh toán": "text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs font-semibold",
  "Chờ xử lý": "text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full text-xs font-semibold",
  "Chưa thanh toán": "text-red-600 bg-red-100 px-2 py-1 rounded-full text-xs font-semibold",
};

const RecentTransaction = () => {
  const totalAmount = invoices.reduce((acc,curr)=> {
    return acc+curr.amount;
  },0)
  return (
    <Table>
      <TableCaption>Các giao dịch mới nhất của bạn</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-25">Ngày</TableHead>
          <TableHead>Mô tả</TableHead>
          <TableHead>Danh mục</TableHead>
          <TableHead className="text-right">Số tiền</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((item) => {
          const idRow = crypto.randomUUID();
          return (
            <TableRow key={idRow}>
              <TableCell className="font-medium">{item.date}</TableCell>
              <TableCell >
                <span className={statusStyles[item.status] || "text-gray-500"}>
                  {item.status}
                </span>
              </TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell className="text-right">{formatVND(item.amount)}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{formatVND(totalAmount)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
export default RecentTransaction;