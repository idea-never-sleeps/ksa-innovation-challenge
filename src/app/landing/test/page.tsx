'use client'

import { useState } from "react";
import LandingImage from "../image";

export default function LadingTestPage() {
  const [percent, setPercent] = useState(0);


  return (
    <div>
      {/* slider */}
      <input type="range" min="0" max="100000" value={percent} onChange={(e) => setPercent(Number(e.target.value))} />
      {percent}
      <LandingImage percentage={percent} />
    </div>
  );
}