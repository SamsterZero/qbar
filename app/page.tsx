"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BarcodeTab } from "@/components/barcode/BarcodeTab";
import { QrTab } from "@/components/qr/QrTab";

export default function Home() {

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
          <QrTab />

          {/* BARCODE TAB */}
          <BarcodeTab/>
        </Tabs>
      </div>
    </main>
  );
}
