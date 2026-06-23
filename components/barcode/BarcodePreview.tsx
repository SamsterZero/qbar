"use client";

import { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

interface BarcodeProps {
  value: string;
  format: string;
};

export function BarcodePreview({ value, format }: BarcodeProps) {
  const ref = useRef<SVGSVGElement | null>(null);
  useEffect(() => {
    if (!ref.current || !value) return;

    JsBarcode(ref.current, value, {
      format: format,
      displayValue: true,
    });
  }, [value]);

  if (!value) {
    return <p className="text-gray-500">Enter text to generate Barcode</p>;
  }
  return <svg ref={ref} />;
}
