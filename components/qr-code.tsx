"use client";

import QRCode from "react-qr-code";

type QRCodeProps = {
  value: string;
};

export function QRCodeComponent({ value }: QRCodeProps) {
  if (!value) {
    return <p className="text-gray-500">Enter text to generate QR</p>;
  }

  return <QRCode value={value} />;
}