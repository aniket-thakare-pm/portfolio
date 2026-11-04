import React from "react";

export const ScaleGraphic = ({ className = "" }) => (
  <svg
    viewBox="0 0 240 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    {/* Background Grid Accent */}
    <g opacity="0.18" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3">
      <line x1="20" y1="40" x2="220" y2="40" />
      <line x1="20" y1="80" x2="220" y2="80" />
      <line x1="20" y1="120" x2="220" y2="120" />
      <line x1="60" y1="20" x2="60" y2="140" />
      <line x1="120" y1="20" x2="120" y2="140" />
      <line x1="180" y1="20" x2="180" y2="140" />
    </g>

    {/* Central Pillar & Base */}
    <path
      d="M100 138H140M110 138L116 128H124L130 138M120 128V36M120 28V36"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="120" cy="28" r="4.5" fill="currentColor" />
    <circle cx="120" cy="40" r="3" fill="none" stroke="currentColor" strokeWidth="2" />

    {/* Calibration Degree Arc at Fulcrum */}
    <path
      d="M106 46C110 49 115 50 120 50C125 50 130 49 134 46"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.6"
    />
    <line x1="120" y1="40" x2="120" y2="47" stroke="currentColor" strokeWidth="1.5" />

    {/* Balanced Crossbeam with Pivot */}
    <path
      d="M52 46L120 38L188 46"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Left Pan & Chains */}
    <line x1="52" y1="46" x2="36" y2="84" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
    <line x1="52" y1="46" x2="68" y2="84" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
    <path
      d="M32 84C32 94 41 100 52 100C63 100 72 94 72 84H32Z"
      fill="currentColor"
      fillOpacity="0.2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Document / Case Glyph in Left Pan */}
    <rect x="46" y="78" width="12" height="15" rx="1.5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.2" />
    <line x1="49" y1="82" x2="55" y2="82" stroke="currentColor" strokeWidth="1" />
    <line x1="49" y1="85" x2="55" y2="85" stroke="currentColor" strokeWidth="1" />

    {/* Right Pan & Chains */}
    <line x1="188" y1="46" x2="172" y2="84" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
    <line x1="188" y1="46" x2="204" y2="84" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
    <path
      d="M168 84C168 94 177 100 188 100C199 100 208 94 208 84H168Z"
      fill="currentColor"
      fillOpacity="0.2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Compliance Metric Glyph in Right Pan */}
    <circle cx="188" cy="86" r="6" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.2" />
    <path d="M185 86L187 88L191 84" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

    {/* Retro Terminal Label */}
    <text x="120" y="152" textAnchor="middle" fill="currentColor" opacity="0.75" fontSize="8" fontFamily="monospace" letterSpacing="0.15em">
      SYS://LEGAL_DOCKET_ENGINE
    </text>
  </svg>
);

export const SlateGraphic = ({ className = "" }) => (
  <svg
    viewBox="0 0 240 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    {/* Clapper Stick (Angled top hinge) */}
    <g transform="rotate(-6 48 38)">
      <rect x="42" y="22" width="156" height="20" rx="3" fill="#1C1917" stroke="currentColor" strokeWidth="2" />
      {/* Hazard Stripes */}
      <path d="M56 23L68 41M80 23L92 41M104 23L116 41M128 23L140 41M152 23L164 41M176 23L188 41" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
      {/* Pivot hinge */}
      <circle cx="48" cy="32" r="3" fill="currentColor" />
    </g>

    {/* Slate Body */}
    <rect x="42" y="44" width="156" height="88" rx="4" fill="#1C1917" fillOpacity="0.35" stroke="currentColor" strokeWidth="2" />

    {/* Monospace Scene / Take Specs */}
    <g fill="currentColor" fontFamily="monospace" fontSize="8" letterSpacing="0.1em">
      <text x="52" y="60" opacity="0.6">PROD:</text>
      <text x="84" y="60" fontWeight="bold">DEZINE STUDIO</text>

      <line x1="42" y1="67" x2="198" y2="67" stroke="currentColor" strokeWidth="1" opacity="0.4" />

      <text x="52" y="80" opacity="0.6">SCENE</text>
      <text x="52" y="93" fontSize="12" fontWeight="bold">01</text>

      <line x1="90" y1="67" x2="90" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.4" />

      <text x="98" y="80" opacity="0.6">TAKE</text>
      <text x="98" y="93" fontSize="12" fontWeight="bold">80+</text>

      <line x1="138" y1="67" x2="138" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.4" />

      <text x="146" y="80" opacity="0.6">VIEWERS</text>
      <text x="146" y="93" fontSize="11" fontWeight="bold">3M+</text>

      <line x1="42" y1="100" x2="198" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </g>

    {/* Media Waveform Timeline */}
    <path
      d="M52 118L60 114L66 122L74 110L82 124L90 112L98 120L106 108L114 126L122 110L130 120L138 114L146 122L154 116L162 120L170 112L178 122L188 118"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="106" cy="108" r="2.5" fill="currentColor" />

    {/* Subtitle */}
    <text x="120" y="148" textAnchor="middle" fill="currentColor" opacity="0.75" fontSize="8" fontFamily="monospace" letterSpacing="0.15em">
      MEDIA_OPS · 8-PERSON ENGINE
    </text>
  </svg>
);

export const LogitGraphic = ({ className = "" }) => (
  <svg
    viewBox="0 0 240 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    {/* Coordinate Axes */}
    <line x1="40" y1="20" x2="40" y2="110" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="40" y1="110" x2="210" y2="110" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

    {/* Axis Ticks & Labels */}
    <g fill="currentColor" fontFamily="monospace" fontSize="7" opacity="0.7">
      <text x="32" y="26" textAnchor="end">1.0</text>
      <line x1="36" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="1" />
      <text x="32" y="68" textAnchor="end">0.5</text>
      <line x1="36" y1="66" x2="40" y2="66" stroke="currentColor" strokeWidth="1" />
      <text x="32" y="112" textAnchor="end">0.0</text>

      <text x="40" y="122" textAnchor="middle">-3σ</text>
      <text x="120" y="122" textAnchor="middle">V_i</text>
      <text x="200" y="122" textAnchor="middle">+3σ</text>
    </g>

    {/* Grid Guidelines */}
    <line x1="40" y1="24" x2="200" y2="24" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.25" />
    <line x1="40" y1="66" x2="200" y2="66" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.25" />
    <line x1="120" y1="20" x2="120" y2="110" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.25" />

    {/* Sigmoidal / Logistic Curve (P(Y=1 | V) = 1 / (1 + e^-V)) */}
    <path
      d="M44 106C75 106 95 100 110 82C120 70 126 50 145 35C160 26 178 24 200 24"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* Empirical Observed Data Points */}
    <circle cx="68" cy="104" r="2.5" fill="currentColor" />
    <circle cx="92" cy="98" r="2.5" fill="currentColor" />
    <circle cx="110" cy="82" r="3.5" fill="#1C1917" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="132" cy="52" r="3.5" fill="#1C1917" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="158" cy="30" r="2.5" fill="currentColor" />
    <circle cx="186" cy="25" r="2.5" fill="currentColor" />

    {/* Formula Monospace Overlay */}
    <text x="140" y="88" fill="currentColor" opacity="0.85" fontSize="8" fontFamily="monospace" letterSpacing="0.05em">
      P(i) = exp(Vi)/Σexp(Vj)
    </text>
    <text x="140" y="99" fill="currentColor" opacity="0.6" fontSize="7" fontFamily="monospace">
      MAE: 3.34% · N=30
    </text>
  </svg>
);

export const HourglassGraphic = ({ className = "" }) => (
  <svg
    viewBox="0 0 240 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    {/* Outer Device Bezel / Timer Dial */}
    <circle cx="120" cy="65" r="50" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.4" />
    <circle cx="120" cy="65" r="44" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />

    {/* Dial Tick Marks */}
    <line x1="120" y1="16" x2="120" y2="21" stroke="currentColor" strokeWidth="2" />
    <line x1="169" y1="65" x2="164" y2="65" stroke="currentColor" strokeWidth="2" />
    <line x1="120" y1="114" x2="120" y2="109" stroke="currentColor" strokeWidth="2" />
    <line x1="71" y1="65" x2="76" y2="65" stroke="currentColor" strokeWidth="2" />

    {/* Hourglass Plates */}
    <line x1="100" y1="34" x2="140" y2="34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="100" y1="96" x2="140" y2="96" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

    {/* Hourglass Glass Shell */}
    <path
      d="M104 35L117 62C118 64 118 66 117 68L104 95H136L123 68C122 66 122 64 123 62L136 35H104Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />

    {/* Upper Sand level */}
    <path d="M108 42H132L120 62L108 42Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />

    {/* Falling Sand stream & dots */}
    <line x1="120" y1="63" x2="120" y2="82" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
    <circle cx="120" cy="74" r="1.2" fill="currentColor" />

    {/* Lower Sand accumulation */}
    <path d="M110 94C112 87 128 87 130 94H110Z" fill="currentColor" fillOpacity="0.45" stroke="currentColor" strokeWidth="1" />

    {/* Local-First Monospace Shield / Lock Tag */}
    <text x="120" y="128" textAnchor="middle" fill="currentColor" opacity="0.8" fontSize="8" fontFamily="monospace" letterSpacing="0.12em">
      LOCAL_FIRST · ROOM_SQLITE
    </text>
  </svg>
);

export const LedgerGraphic = ({ className = "" }) => (
  <svg
    viewBox="0 0 240 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    {/* 3.5" Retro Floppy / Terminal Ledger Frame */}
    <rect x="45" y="16" width="150" height="96" rx="6" fill="#1C1917" fillOpacity="0.3" stroke="currentColor" strokeWidth="2" />
    
    {/* Metal Shutter Slider Top */}
    <rect x="75" y="16" width="65" height="34" rx="2" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" />
    <rect x="94" y="22" width="14" height="22" rx="1" fill="#1C1917" fillOpacity="0.6" stroke="currentColor" strokeWidth="1" />

    {/* Write Protect Notch */}
    <rect x="175" y="22" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />

    {/* Ledger Monospace Terminal Rows */}
    <g fill="currentColor" fontFamily="monospace" fontSize="7" letterSpacing="0.08em">
      <line x1="55" y1="58" x2="185" y2="58" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <text x="56" y="68" opacity="0.6">STAMP</text>
      <text x="96" y="68" opacity="0.6">CATEGORY</text>
      <text x="146" y="68" opacity="0.6">RUN-RATE</text>

      <line x1="55" y1="72" x2="185" y2="72" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />

      <text x="56" y="82" fontWeight="bold">04-NOV</text>
      <text x="96" y="82">DEV_OPS</text>
      <text x="146" y="82" fontWeight="bold">+18.4%</text>

      <text x="56" y="93" fontWeight="bold">05-NOV</text>
      <text x="96" y="93">CASH_FLOW</text>
      <text x="146" y="93" fontWeight="bold">SYNC_OK</text>
      
      <line x1="55" y1="98" x2="185" y2="98" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
    </g>

    {/* Status footer */}
    <text x="120" y="126" textAnchor="middle" fill="currentColor" opacity="0.8" fontSize="8" fontFamily="monospace" letterSpacing="0.12em">
      ZERO_CLOUD · FORECAST_MODEL
    </text>
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
