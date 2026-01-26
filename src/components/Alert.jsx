import { useState } from "react";

export default function Alert() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="flex items-center justify-between p-4 mb-4 text-blue-800 bg-blue-50 border border-blue-200 rounded-lg">
      <span>This is a simple alert message.</span>
      <button
        onClick={() => setIsVisible(false)}
        className="text-blue-800 hover:text-blue-900"
      >
        ✕
      </button>
    </div>
  );
}
