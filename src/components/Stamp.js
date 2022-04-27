import React from "react";

export default function Stamp({ text }) {
  const bgColor = text === "Kargo Bedava" ? "bg-green-600" : "bg-[#535353]";

  return (
    <div
      data-testid="stamp"
      className={`w-16 ${bgColor} text-white font-semibold text-[0.6rem] leading-3 text-center p-1`}
    >
      {text}
    </div>
  );
}
