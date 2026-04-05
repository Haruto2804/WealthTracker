import AppButton from "@/components/AppButton";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { formatVND } from "@/utils";


const AssetItem = ({ asset }) => {
  return (
    <Item className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
      <ItemMedia variant="icon">
        <div className={`rounded-full flex items-center justify-center ${asset.color} p-3`}>
          {asset.icon}
        </div>
      </ItemMedia>

      <ItemContent>
        <ItemTitle className="font-semibold text-gray-900">{asset.title}</ItemTitle>
        <ItemDescription>{asset.percentage}% tổng giá trị tài sản</ItemDescription>
      </ItemContent>

      <ItemActions className="flex flex-col items-end gap-2">
        <p className="text-lg font-bold text-gray-950">{formatVND(asset.amount)}</p>
        <AppButton
          className="
    /* Màu sắc cơ bản */
    text-red-600 bg-red-50 border-red-100 
    /* Hiệu ứng Hover */
    hover:bg-red-600 hover:text-white hover:border-red-600 
    /* Hình dáng & Chuyển động */
    rounded-xl px-4 py-2 font-medium 
    transition-all duration-300 ease-in-out
    /* Shadow nhẹ */
    active:scale-95 shadow-sm hover:shadow-red-200
  "
          variants="outline" 
          iconType="delete"
        >
          Xóa
        </AppButton>
      </ItemActions>
    </Item>
  );
};
export default AssetItem;