"use client";

interface Upi {
  pa: string;
  name: string;
  amount: string;
}

interface UpiFormProps {
  value: Upi;
  onChange: (upi: Upi) => void;
}
export function UpiForm({ value, onChange }: UpiFormProps) {
  return (
    <div className="space-y-2">
      <input
        className="w-full border p-2 rounded"
        placeholder="UPI ID"
        value={value.pa}
        onChange={(e) => onChange({ ...value, pa: e.target.value })}
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Name"
        value={value.name}
        onChange={(e) => onChange({ ...value, name: e.target.value })}
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Amount"
        value={value.amount}
        onChange={(e) => onChange({ ...value, amount: e.target.value })}
      />
    </div>
  );
}
