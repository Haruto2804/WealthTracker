import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup, FieldLabel } from "./ui/field"
import CategorySelect from "./CategorySelect"
import DatePicker from "./ui/DatePicker"
import { Input } from "./ui/input"
const CATEGORY_OPTIONS = [
  { label: "Ăn uống", value: "dining" },
  { label: "Di chuyển", value: "transportation" },
  { label: "Giải trí", value: "entertainment" },
  { label: "Mua sắm", value: "shopping" },
  { label: "Hóa đơn", value: "bills" },
  { label: "Khác", value: "others" },
];
const TRANSACTION_TYPES = [
  { label: "Thu nhập", value: "income" },
  { label: "Chi tiêu", value: "expense" },
];
const AddTransactionModal = ({ trigger }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Thêm giao dịch mới</DialogTitle>
          <DialogDescription>
            Nhập thông tin giao dịch mới
          </DialogDescription>
        </DialogHeader>
        <FieldGroup >
          <Field orientation="horizontal">
            <FieldLabel className="min-w-20">Loại</FieldLabel>
            <CategorySelect
              placeholder="Chọn loại"
              title="Loại"
              options={TRANSACTION_TYPES}
            />
          </Field>
          <Field orientation="horizontal ">
            <FieldLabel className="min-w-20">Ngày</FieldLabel>
            <div className="flex-1 min-w-0">
              <DatePicker />
            </div>


          </Field>
          <Field orientation="horizontal">
            <FieldLabel className="min-w-20">Mô tả</FieldLabel>
            <Input
              placeholder="Nhập mô tả về khoản tiền của bạn..."
            />

          </Field>
          <Field orientation="horizontal">
            <FieldLabel className="min-w-20">Danh mục</FieldLabel>
            <CategorySelect
              placeholder="Chọn loại"
              title="Danh mục"
              options={CATEGORY_OPTIONS}
            />
          </Field>
          <Field orientation="horizontal">
            <FieldLabel className="min-w-20">Số tiền</FieldLabel>
            <Input type = "number"></Input>
          </Field>
        </FieldGroup>
      </DialogContent>
    </Dialog>
  )
}
export default AddTransactionModal

