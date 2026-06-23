"use client";

interface WifiData {
  ssid: string;
  password: string;
}

interface WifiFormProps {
  value: WifiData;
  onChange: (wifi: WifiData) => void;
}

export function WifiForm({ value, onChange }: WifiFormProps) {
  return (
    <div className="space-y-2">
      <input
        className="w-full border p-2 rounded"
        placeholder="WiFi SSID"
        value={value.ssid}
        onChange={(e) => onChange({ ...value, ssid: e.target.value })}
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Password"
        value={value.password}
        onChange={(e) => onChange({ ...value, password: e.target.value })}
      />
    </div>
  );
}
