import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const assetOptions = [
  { value: "gold", label: "Vàng" },
  { value: "stocks", label: "Chứng khoán" },
  { value: "cash", label: "Tiền mặt" },
  { value: "realestate", label: "Bất động sản" },
  { value: "savings", label: "Tiết kiệm" },
  { value: "crypto", label: "Crypto" },
];

const AddAssetModal = ({ trigger, onAdd }) => {
  const [assetType, setAssetType] = useState("cash");
  const [amount, setAmount] = useState("");


  return (
    <Dialog>
      <DialogTrigger>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25 rounded-3xl p-8">

        {/* Header */}
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Thêm tài sản mới
          </DialogTitle>
          <DialogDescription className="text-gray-500 text-base">
            Nhập thông tin tài sản mới
          </DialogDescription>
        </DialogHeader>

        {/* Form Content */}
        <div className="grid gap-6 py-6">
          {/* Loại tài sản */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="asset-type" className="text-left font-medium text-gray-700">
              Loại tài sản
            </Label>
            <div className="col-span-3">
              <Select value={assetType} onValueChange={setAssetType}>
                <SelectTrigger className="w-full bg-gray-50 border-none h-12 rounded-xl focus:ring-2 focus:ring-black">
                  <SelectValue placeholder="Chọn loại tài sản" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  {assetOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Giá trị */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="value" className="text-left font-medium text-gray-700">
              Giá trị (VNĐ)
            </Label>
            <div className="col-span-3">
              <Input
                id="value"
                type="number"
                placeholder="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-gray-50 border-none h-12 rounded-xl focus:ring-2 focus:ring-black placeholder:text-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <DialogFooter className="flex flex-row gap-3 sm:justify-end">
          <DialogClose>
            <Button
              variant="outline"
              className="flex-1 cursor-pointer sm:flex-none h-12 px-8 rounded-xl border-gray-200 hover:bg-gray-50 font-semibold"
            >
              Hủy
            </Button>
          </DialogClose>

                    
          <Button
            className="cursor-pointer flex-1 sm:flex-none h-12 px-8 rounded-xl bg-black hover:bg-gray-800 text-white font-semibold transition-all"
          >
            Thêm
          </Button>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
};

export default AddAssetModal;