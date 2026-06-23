"use client";

import { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

type BarcodeProps = {
  value: string;
  format: string;
};

export function BarcodePreview({ value, format }: BarcodeProps) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!ref.current || !value) return;

    JsBarcode(ref.current, value, {
      format: "CODE128",
      displayValue: true,
    });
  }, [value]);

  return <svg ref={ref} />;
}
