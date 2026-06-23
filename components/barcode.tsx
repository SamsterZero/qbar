"use client";

import { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

type BarcodeProps = {
  value: string;
};

export function BarcodeComponent({ value }: BarcodeProps) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!ref.current || !value) return;

    JsBarcode(ref.current, value, {
      format: "CODE128",
      displayValue: true,
    });
  }, [value]);

  return (
    <div className="flex flex-col items-center gap-2">
      <svg ref={ref} />
    </div>
  );
}