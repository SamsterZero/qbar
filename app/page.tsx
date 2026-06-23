"use client";

import { useState } from "react";
import QRCode from "react-qr-code";
import JsBarcode from "jsbarcode";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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

  const renderBarcode = (node: SVGSVGElement | null) => {
    if (!node || !text) return;

    JsBarcode(node, text, {
      format: barcodeType,
      displayValue: true,
    });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 space-y-6">

        <h1 className="text-2xl font-bold text-center">
          QR & Barcode Suite
        </h1>

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

            {qrType === "url" && (
              <input
                className="w-full border p-2 rounded"
                placeholder="Enter URL or text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            )}

            {qrType === "wifi" && (
              <div className="space-y-2">
                <input
                  className="w-full border p-2 rounded"
                  placeholder="WiFi SSID"
                  value={wifi.ssid}
                  onChange={(e) => setWifi({ ...wifi, ssid: e.target.value })}
                />
                <input
                  className="w-full border p-2 rounded"
                  placeholder="Password"
                  value={wifi.password}
                  onChange={(e) => setWifi({ ...wifi, password: e.target.value })}
                />
              </div>
            )}

            {qrType === "upi" && (
              <div className="space-y-2">
                <input
                  className="w-full border p-2 rounded"
                  placeholder="UPI ID"
                  value={upi.pa}
                  onChange={(e) => setUpi({ ...upi, pa: e.target.value })}
                />
                <input
                  className="w-full border p-2 rounded"
                  placeholder="Name"
                  value={upi.name}
                  onChange={(e) => setUpi({ ...upi, name: e.target.value })}
                />
                <input
                  className="w-full border p-2 rounded"
                  placeholder="Amount"
                  value={upi.amount}
                  onChange={(e) => setUpi({ ...upi, amount: e.target.value })}
                />
              </div>
            )}

            <div className="flex justify-center pt-4">
              <QRCode value={generateQRValue()} />
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
              <svg ref={renderBarcode as any} />
            </div>

          </TabsContent>

        </Tabs>
      </div>
    </main>
  );
}