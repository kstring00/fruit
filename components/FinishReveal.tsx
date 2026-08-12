"use client";

import { useState } from "react";

export function FinishReveal() {
  const [reveal, setReveal] = useState(56);

  return (
    <div className="reveal-card">
      <div className="reveal-head">
        <div>
          <span className="eyebrow">INTERACTIVE FINISH TEST</span>
          <h3>Drag from damage to disappeared.</h3>
        </div>
        <span className="reveal-percent">{reveal}%</span>
      </div>

      <div className="reveal-stage" style={{ ["--reveal" as string]: `${reveal}%` }}>
        <div className="surface surface-before">
          <div className="scratch s1" />
          <div className="scratch s2" />
          <div className="scratch s3" />
          <span>BEFORE</span>
        </div>
        <div className="surface surface-after">
          <div className="shine" />
          <span>AFTER</span>
        </div>
        <div className="reveal-line"><i /></div>
      </div>

      <input
        className="reveal-range"
        type="range"
        min="8"
        max="92"
        value={reveal}
        onChange={(event) => setReveal(Number(event.target.value))}
        aria-label="Reveal repaired finish"
      />
      <p className="microcopy">Concept visual only — swap in Sam&apos;s real before/after photography with permission.</p>
    </div>
  );
}
