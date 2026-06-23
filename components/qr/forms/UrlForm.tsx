"use client";

interface UrlFormProps {
  value: string;
  onChange: (value: string) => void;
}

export function UrlForm({ value, onChange }: UrlFormProps) {
  return (
    <input
      className="w-full border p-2 rounded"
      placeholder="Enter URL or text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
