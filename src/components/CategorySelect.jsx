import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const CategorySelect = ({ placeholder = "", options = [], title = "Your label's options" }) => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent >
        <SelectGroup>
          <SelectLabel>{title}</SelectLabel>
          {options.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              className="py-3 cursor-pointer" // Tăng padding để giống ảnh mẫu
            >
              {item.label}
            </SelectItem>
          ))}

        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
export default CategorySelect;