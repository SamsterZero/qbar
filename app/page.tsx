"use client";

import { useRef, useState } from "react";
import QRCode from "react-qr-code";
import JsBarcode from "jsbarcode";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UrlForm } from "@/components/qr/forms/UrlForm";
import { WifiForm } from "@/components/qr/forms/WifiForm";
import { UpiForm } from "@/components/qr/forms/UpiForm";
import { QrPreview } from "@/components/qr/QrPreview";
import { BarcodePreview } from "@/components/barcode/BarcodePreview";

export default function Home() {
  const [qrType, setQrType] = useState("url");
  const [barcodeType, setBarcodeType] = useState("CODE128");

  const [text, setText] = useState("");
  const [wifi, setWifi] = useState({ ssid: "", password: "" });
  const [upi, setUpi] = useState({ pa: "", name: "", amount: "" });

  const generateQRValue = () => {
    switch (qrType) {
      case "wifi":
        return `WIFI:T:WPA;S:${wifi.ssid};P:${wifi.password};;`;
      case "upi":
        return `upi://pay?pa=${upi.pa}&pn=${upi.name}&am=${upi.amount}`;
      case "url":
      default:
        return text;
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center">QR & Barcode Suite</h1>

        <Tabs defaultValue="qr" className="w-full">
          {/* Tabs */}
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="qr">QR Code</TabsTrigger>
            <TabsTrigger value="barcode">Barcode</TabsTrigger>
          </TabsList>

          {/* QR TAB */}
          <TabsContent value="qr" className="space-y-4">
            <Select value={qrType} onValueChange={setQrType}>
              <SelectTrigger>
                <SelectValue placeholder="Select QR Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="url">URL / Text</SelectItem>
                <SelectItem value="wifi">WiFi</SelectItem>
                <SelectItem value="upi">UPI Payment</SelectItem>
              </SelectContent>
            </Select>

            {qrType === "url" && <UrlForm value={text} onChange={setText} />}

            {qrType === "wifi" && <WifiForm value={wifi} onChange={setWifi} />}

            {qrType === "upi" && <UpiForm value={upi} onChange={setUpi} />}

            <div className="flex justify-center pt-4">
              <QrPreview value={generateQRValue()} />
            </div>
          </TabsContent>

          {/* BARCODE TAB */}
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
        </Tabs>
      </div>
    </main>
  );
}
