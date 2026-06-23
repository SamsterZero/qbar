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
import { QrPreview } from "./QrPreview";
import { UrlForm } from "./forms/UrlForm";
import { WifiForm } from "./forms/WifiForm";
import { UpiForm } from "./forms/UpiForm";

export function QrTab() {
  const [qrType, setQrType] = useState("url");
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
  );
}
