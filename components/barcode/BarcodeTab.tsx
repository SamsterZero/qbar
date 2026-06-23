"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { TabsContent } from "../ui/tabs";
import { BarcodePreview } from "./BarcodePreview";

export function BarcodeTab() {
  const [barcodeType, setBarcodeType] = useState("CODE128");
  const [text, setText] = useState("");

  return (
    <TabsContent value="barcode" className="space-y-4">
      <Select value={barcodeType} onValueChange={setBarcodeType}>
        <SelectTrigger>
          <SelectValue placeholder="Select Barcode Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="CODE128">CODE128</SelectItem>
          <SelectItem value="CODE39">CODE39</SelectItem>
          <SelectItem value="EAN13">EAN13</SelectItem>
        </SelectContent>
      </Select>

      <input
        className="w-full border p-2 rounded"
        placeholder="Enter barcode value"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex justify-center pt-4">
        <BarcodePreview value={text} format={barcodeType} />
      </div>
    </TabsContent>
  );
}
