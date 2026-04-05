import AddTransactionModal from "@/components/AddTransactionModal";
import AppButton from "@/components/AppButton";
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
import { FileSearch } from "lucide-react"; // Hoặc icon bất kỳ từ react-icons

const columns = [
  { key: "date", label: "Ngày", className: "w-[120px]" },
  { key: "description", label: "Mô tả", className: "min-w-[200px]" },
  { key: "category", label: "Danh mục", className: "" },
  { key: "type", label: "Loại", className: "" },
  { key: "amount", label: "Số tiền", className: "text-right" },
  { key: "actions", label: "Thao tác", className: "text-right w-[100px]" },
];
const TransactionList = ({ transactionData = [] }) => {
  const totalBalance = transactionData.reduce((acc, trans) => {
    return trans.type === 'income' ? acc + trans.amount : acc - trans.amount;
  }, 0);

  if (transactionData.length === 0) {
    return (
      <div className="mt-5 flex flex-col items-center justify-center py-20 bg-gray-50/50 rounded-xl border-2 border-dashed border-gray-200">
        {/* Icon nền mờ */}
        <div className="bg-white p-4 rounded-full shadow-sm mb-4">
          <FileSearch className="size-10 text-gray-400" />
        </div>

        {/* Thông báo chính */}
        <h3 className="text-lg font-semibold text-gray-900">
          Hiện không có giao dịch nào
        </h3>

        {/* Gợi ý cho người dùng */}
        <p className="text-sm text-gray-500 mt-4 max-w-62.5 text-center">
          Dữ liệu thu chi của bạn sẽ xuất hiện tại đây. Hãy bắt đầu thêm giao dịch đầu tiên!
        </p>

        {/* Nút hành động nhanh (tùy chọn) */}
        <AddTransactionModal
          trigger={
            <AppButton
              iconType="add"
              variant="default"
            >
              Thêm giao dịch
            </AppButton>
          }
        />
      </div>
    );
  }
  return (
    <Table>
      <TableCaption>Danh sách các giao  dịch của bạn</TableCaption>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead
              key={column.key}
              className={column.className}
            >
              {column.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactionData.map((trans) => (
          <TableRow key={trans.id}>
            <TableCell className="font-medium">{trans.date}</TableCell>
            <TableCell>{trans.description}</TableCell>
            <TableCell>{trans.category}</TableCell>
            <TableCell>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${trans.type === 'income'
                  ? "bg-green-100 text-green-700 border border-green-200"
                  : "bg-red-100 text-red-500 border border-red-200"
                  }`}
              >
                {trans.type === 'income' ? "Thu nhập" : "Chi tiêu"}
              </span>
            </TableCell>
            <TableCell className="text-right font-medium">
              <span
                className={`px-2 py-1 rounded-md text-sm font-bold ${trans.amount >= 0
                  ? "text-green-600 bg-green-100"
                  : "text-red-600 bg-red-100"
                  }`}
              >
                {trans.amount >= 0 ? "+" : ""}{formatVND(trans.amount)}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className="bg-gray-50/50 font-bold">
        <TableRow>
          <TableCell colSpan={4} className="text-gray-600">Tổng cộng (Số dư còn lại)</TableCell>
          <TableCell className={`text-right text-lg ${totalBalance >= 0 ? "text-green-500" : "text-red-600"}`}>
            {formatVND(totalBalance)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
export default TransactionList;