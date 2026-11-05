import React from "react";

/**
 * Blocky retro 8-bit / 16-bit logo stamps for projects.
 * Replaces fine CAD curved lines and text clutter with chunky, iconic pixel-art silhouettes.
 */

export const ScaleGraphic = ({ className = "" }) => (
  <svg
    viewBox="0 0 240 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    {/* Central Pillar Finial */}
    <rect x="114" y="20" width="12" height="12" fill="currentColor" />

    {/* Chunky Main Balance Beam */}
    <rect x="52" y="32" width="136" height="12" fill="currentColor" />

    {/* Fulcrum Block */}
    <rect x="110" y="44" width="20" height="8" fill="currentColor" />

    {/* Central Pillar */}
    <rect x="114" y="52" width="12" height="60" fill="currentColor" />

    {/* Stepped Pedestal Base */}
    <rect x="102" y="112" width="36" height="8" fill="currentColor" />
    <rect x="88" y="120" width="64" height="10" fill="currentColor" />
    <rect x="74" y="130" width="92" height="12" fill="currentColor" />

    {/* Left Pan Chains (Chunky stepped pixel links) */}
    <rect x="60" y="44" width="6" height="32" fill="currentColor" />
    <rect x="86" y="44" width="6" height="32" fill="currentColor" />

    {/* Left Pan (Chunky Stepped Basket) */}
    <rect x="44" y="76" width="64" height="8" fill="currentColor" />
    <rect x="52" y="84" width="48" height="8" fill="currentColor" />
    <rect x="60" y="92" width="32" height="8" fill="currentColor" />

    {/* Left Token: Case Docket Block */}
    <rect x="66" y="60" width="18" height="16" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="3" />

    {/* Right Pan Chains (Chunky stepped pixel links) */}
    <rect x="148" y="44" width="6" height="32" fill="currentColor" />
    <rect x="174" y="44" width="6" height="32" fill="currentColor" />

    {/* Right Pan (Chunky Stepped Basket) */}
    <rect x="132" y="76" width="64" height="8" fill="currentColor" />
    <rect x="140" y="84" width="48" height="8" fill="currentColor" />
    <rect x="148" y="92" width="32" height="8" fill="currentColor" />

    {/* Right Token: Compliance Stamp Block */}
    <rect x="154" y="62" width="16" height="14" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="3" />
    <rect x="160" y="66" width="4" height="6" fill="currentColor" />
  </svg>
);

export const SlateGraphic = ({ className = "" }) => (
  <svg
    viewBox="0 0 240 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    {/* Clapper Top Stick with Alternating Block Stripes */}
    <rect x="44" y="24" width="152" height="22" fill="currentColor" />
    {/* Block Cutouts for Retro Hazard Stripes */}
    <rect x="60" y="24" width="16" height="22" fill="#1C1917" />
    <rect x="96" y="24" width="16" height="22" fill="#1C1917" />
    <rect x="132" y="24" width="16" height="22" fill="#1C1917" />
    <rect x="168" y="24" width="16" height="22" fill="#1C1917" />

    {/* Clapper Body Container */}
    <rect
      x="44"
      y="52"
      width="152"
      height="84"
      fill="currentColor"
      fillOpacity="0.18"
      stroke="currentColor"
      strokeWidth="6"
    />

    {/* Chunky 8-Bit Retro Play Arrow Glyph (Center Stamp) */}
    <rect x="100" y="70" width="8" height="48" fill="currentColor" />
    <rect x="108" y="74" width="8" height="40" fill="currentColor" />
    <rect x="116" y="78" width="8" height="32" fill="currentColor" />
    <rect x="124" y="82" width="8" height="24" fill="currentColor" />
    <rect x="132" y="86" width="8" height="16" fill="currentColor" />
    <rect x="140" y="90" width="8" height="8" fill="currentColor" />

    {/* Corner Pixel Notches */}
    <rect x="54" y="62" width="8" height="8" fill="currentColor" opacity="0.6" />
    <rect x="178" y="62" width="8" height="8" fill="currentColor" opacity="0.6" />
    <rect x="54" y="118" width="8" height="8" fill="currentColor" opacity="0.6" />
    <rect x="178" y="118" width="8" height="8" fill="currentColor" opacity="0.6" />
  </svg>
);

export const LogitGraphic = ({ className = "" }) => (
  <svg
    viewBox="0 0 240 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    {/* Outer Chip Leads (Left & Right chunky pins) */}
    <rect x="48" y="44" width="16" height="8" fill="currentColor" />
    <rect x="48" y="60" width="16" height="8" fill="currentColor" />
    <rect x="48" y="76" width="16" height="8" fill="currentColor" />
    <rect x="48" y="92" width="16" height="8" fill="currentColor" />

    <rect x="176" y="44" width="16" height="8" fill="currentColor" />
    <rect x="176" y="60" width="16" height="8" fill="currentColor" />
    <rect x="176" y="76" width="16" height="8" fill="currentColor" />
    <rect x="176" y="92" width="16" height="8" fill="currentColor" />

    {/* Outer Chip Leads (Top & Bottom chunky pins) */}
    <rect x="84" y="14" width="8" height="16" fill="currentColor" />
    <rect x="104" y="14" width="8" height="16" fill="currentColor" />
    <rect x="128" y="14" width="8" height="16" fill="currentColor" />
    <rect x="148" y="14" width="8" height="16" fill="currentColor" />

    <rect x="84" y="110" width="8" height="16" fill="currentColor" />
    <rect x="104" y="110" width="8" height="16" fill="currentColor" />
    <rect x="128" y="110" width="8" height="16" fill="currentColor" />
    <rect x="148" y="110" width="8" height="16" fill="currentColor" />

    {/* Central Silicon Core Package */}
    <rect
      x="64"
      y="30"
      width="112"
      height="80"
      fill="currentColor"
      fillOpacity="0.22"
      stroke="currentColor"
      strokeWidth="6"
    />

    {/* 8-bit Stepped Econometric S-Curve Matrix Inside Core */}
    <rect x="80" y="86" width="14" height="10" fill="currentColor" />
    <rect x="94" y="76" width="14" height="20" fill="currentColor" />
    <rect x="108" y="62" width="14" height="34" fill="currentColor" />
    <rect x="122" y="48" width="14" height="48" fill="currentColor" />
    <rect x="136" y="40" width="14" height="56" fill="currentColor" />
    <rect x="150" y="40" width="10" height="56" fill="currentColor" />

    {/* Chip Notch Marker */}
    <rect x="68" y="34" width="8" height="8" fill="currentColor" />
  </svg>
);

export const HourglassGraphic = ({ className = "" }) => (
  <svg
    viewBox="0 0 240 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    {/* Top & Bottom Solid Plates */}
    <rect x="76" y="18" width="88" height="12" fill="currentColor" />
    <rect x="76" y="110" width="88" height="12" fill="currentColor" />

    {/* Top Stepped Glass Chamber */}
    <rect x="84" y="30" width="72" height="10" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="4" />
    <rect x="92" y="40" width="56" height="10" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="4" />
    <rect x="102" y="50" width="36" height="10" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="4" />
    <rect x="112" y="60" width="16" height="10" fill="currentColor" stroke="currentColor" strokeWidth="4" />

    {/* Bottom Stepped Glass Chamber */}
    <rect x="112" y="70" width="16" height="10" fill="currentColor" stroke="currentColor" strokeWidth="4" />
    <rect x="102" y="80" width="36" height="10" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="4" />
    <rect x="92" y="90" width="56" height="10" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="4" />
    <rect x="84" y="100" width="72" height="10" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="4" />

    {/* Upper Sand Deposit (8-bit block) */}
    <rect x="96" y="42" width="48" height="6" fill="currentColor" />
    <rect x="104" y="48" width="32" height="6" fill="currentColor" />

    {/* Center Falling Particle Stream */}
    <rect x="118" y="64" width="4" height="12" fill="currentColor" />

    {/* Lower Sand Accumulation (8-bit stepped pyramid) */}
    <rect x="114" y="90" width="12" height="6" fill="currentColor" />
    <rect x="104" y="96" width="32" height="6" fill="currentColor" />
    <rect x="94" y="102" width="52" height="6" fill="currentColor" />

    {/* Left & Right Chunky Reticle Brackets [ ] */}
    <rect x="52" y="44" width="6" height="52" fill="currentColor" opacity="0.6" />
    <rect x="52" y="44" width="16" height="6" fill="currentColor" opacity="0.6" />
    <rect x="52" y="90" width="16" height="6" fill="currentColor" opacity="0.6" />

    <rect x="182" y="44" width="6" height="52" fill="currentColor" opacity="0.6" />
    <rect x="172" y="44" width="16" height="6" fill="currentColor" opacity="0.6" />
    <rect x="172" y="90" width="16" height="6" fill="currentColor" opacity="0.6" />
  </svg>
);

export const LedgerGraphic = ({ className = "" }) => (
  <svg
    viewBox="0 0 240 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    {/* 3.5" Disk Outer Shell */}
    <rect
      x="64"
      y="20"
      width="112"
      height="100"
      rx="4"
      fill="currentColor"
      fillOpacity="0.18"
      stroke="currentColor"
      strokeWidth="6"
    />

    {/* Metal Shutter Slider Top */}
    <rect x="86" y="20" width="56" height="38" fill="currentColor" />
    <rect x="106" y="28" width="16" height="22" fill="#1C1917" />

    {/* Write Protect Notch */}
    <rect x="162" y="26" width="8" height="8" fill="#1C1917" />

    {/* Inner Data Token / Ledger Stamp */}
    <rect
      x="80"
      y="66"
      width="80"
      height="44"
      fill="currentColor"
      fillOpacity="0.15"
      stroke="currentColor"
      strokeWidth="4"
    />

    {/* Chunky 8-Bit Data Bars */}
    <rect x="90" y="74" width="60" height="6" fill="currentColor" />
    <rect x="90" y="84" width="60" height="6" fill="currentColor" />
    <rect x="90" y="94" width="36" height="6" fill="currentColor" />

    {/* Verification Block Indicator */}
    <rect x="134" y="94" width="16" height="6" fill="currentColor" />
  </svg>
);

export const ProductGraphic = ({ type, className = "" }) => {
  switch (type) {
    case "scale":
      return <ScaleGraphic className={className} />;
    case "slate":
      return <SlateGraphic className={className} />;
    case "logit":
      return <LogitGraphic className={className} />;
    case "hourglass":
      return <HourglassGraphic className={className} />;
    case "ledger":
      return <LedgerGraphic className={className} />;
    default:
      return null;
  }
};
