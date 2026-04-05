
import { ItemGroup } from "@/components/ui/item"
import AssetItem from "./AssetItem"

const AssetList = ({assetList = []}) => {
  return (
    <ItemGroup>
      {assetList.map((asset)=> {
        return (
          <AssetItem 
          key={asset.id}
          asset={asset}/>
        )
      })}
    </ItemGroup>
  )
}
export default AssetList