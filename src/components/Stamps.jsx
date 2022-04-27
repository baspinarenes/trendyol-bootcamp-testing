import React from "react";
import Stamp from "./Stamp";

export default function Stamps() {
  return (
    <div className="absolute top-2 left-2 flex flex-col gap-1">
      <Stamp text="24 Saatte Kargoda" />
      <Stamp text="Kargo Bedava" />
    </div>
  );
}
