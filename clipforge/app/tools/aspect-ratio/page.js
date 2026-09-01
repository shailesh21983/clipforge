"use client";

import { useState } from "react";

const presets = [
  { name: "16:9", width: 16, height: 9, label: "YouTube / TV" },
  { name: "9:16", width: 9, height: 16, label: "Reels / Shorts / TikTok" },
  { name: "1:1", width: 1, height: 1, label: "Square Posts" },
  { name: "4:3", width: 4, height: 3, label: "Classic Video" },
  { name: "3:2", width: 3, height: 2, label: "Photography" },
  { name: "21:9", width: 21, height: 9, label: "Ultrawide" },
];

function getGcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

export default function AspectRatioTool() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");
  const [decimal, setDecimal] = useState("");
  const [copied, setCopied] = useState(false);

  const calculateRatio = () => {
    const w = Number(width);
    const h = Number(height);

    if (!w || !h || w <= 0 || h <= 0) {
      setResult("");
      setDecimal("");
      return;
    }

    const divisor = getGcd(w, h);
    const ratio = `${w / divisor}:${h / divisor}`;

    setResult(ratio);
    setDecimal((w / h).toFixed(3));
    setCopied(false);
  };

  const usePreset = (preset) => {
    setWidth(preset.width);
    setHeight(preset.height);
    setResult(`${preset.width}:${preset.height}`);
    setDecimal((preset.width / preset.height).toFixed(3));
    setCopied(false);
  };

  const clearAll = () => {
    setWidth("");
    setHeight("");
    setResult("");
    setDecimal("");
    setCopied(false);
  };

  const copyRatio = async () => {
    if (!result) return;

    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px 20px 70px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "35px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "7px 14px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,.18)",
              fontSize: "13px",
              marginBottom: "14px",
            }}
          >
            Free Online Tool
          </div>

          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 52px)",
              margin: "0 0 12px",
              lineHeight: "1.1",
            }}
          >
            Aspect Ratio Calculator
          </h1>

          <p
            style={{
              maxWidth: "650px",
              margin: "0 auto",
              lineHeight: "1.7",
              opacity: 0.8,
            }}
          >
            Quickly calculate the aspect ratio of images, videos, screens,
            photos, and other rectangular dimensions.
          </p>
        </div>

        {/* Calculator */}
        <section
          style={{
            border: "1px solid rgba(255,255,255,.16)",
            borderRadius: "18px",
            padding: "25px",
            background: "rgba(255,255,255,.03)",
            boxShadow: "0 15px 50px rgba(0,0,0,.15)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "18px",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                Width
              </label>

              <input
                type="number"
                min="1"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") calculateRatio();
                }}
                placeholder="e.g. 1920"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "14px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                Height
              </label>

              <input
                type="number"
                min="1"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") calculateRatio();
                }}
                placeholder="e.g. 1080"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "14px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <button
              onClick={calculateRatio}
              style={{
                padding: "13px 20px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Calculate Ratio
            </button>

            <button
              onClick={clearAll}
              style={{
                padding: "13px 20px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,.2)",
                cursor: "pointer",
                background: "transparent",
                color: "inherit",
              }}
            >
              Clear
            </button>
          </div>

          {/* Result */}
          {result && (
            <div
              style={{
                marginTop: "25px",
                padding: "25px",
                borderRadius: "14px",
                textAlign: "center",
                border: "1px solid rgba(255,255,255,.14)",
                background: "rgba(255,255,255,.04)",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  opacity: 0.7,
                  marginBottom: "8px",
                }}
              >
                Your Aspect Ratio
              </div>

              <div
                style={{
                  fontSize: "42px",
                  fontWeight: "800",
                  marginBottom: "5px",
                }}
              >
                {result}
              </div>

              <div style={{ opacity: 0.7, marginBottom: "18px" }}>
                Decimal ratio: {decimal}
              </div>

              <button
                onClick={copyRatio}
                style={{
                  padding: "10px 18px",
                  borderRadius: "9px",
                  border: "1px solid rgba(255,255,255,.2)",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                {copied ? "✓ Copied!" : "Copy Ratio"}
              </button>
            </div>
          )}
        </section>

        {/* Presets */}
        <section style={{ marginTop: "35px" }}>
          <h2 style={{ marginBottom: "8px" }}>Common Aspect Ratios</h2>

          <p style={{ opacity: 0.75, marginBottom: "18px" }}>
            Select a popular ratio to instantly use it in the calculator.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
              gap: "12px",
            }}
          >
            {presets.map((preset) => (
              <button
                key={preset.name}
                onClick={() => usePreset(preset)}
                style={{
                  padding: "16px 10px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,.15)",
                  background: "rgba(255,255,255,.03)",
                  color: "inherit",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <strong style={{ fontSize: "20px" }}>
                  {preset.name}
                </strong>

                <div
                  style={{
                    fontSize: "12px",
                    opacity: 0.65,
                    marginTop: "5px",
                  }}
                >
                  {preset.label}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Information */}
        <section
          style={{
            marginTop: "50px",
            lineHeight: "1.75",
          }}
        >
          <h2>What Is an Aspect Ratio?</h2>

          <p>
            An aspect ratio describes the proportional relationship between
            the width and height of an image, video, display, or other
            rectangular content. It is normally written as two numbers
            separated by a colon, such as 16:9.
          </p>

          <h2>How to Calculate Aspect Ratio</h2>

          <p>
            Enter the width and height of your image or video above. The
            calculator finds the greatest common divisor and simplifies the
            dimensions to their smallest whole-number ratio.
          </p>

          <p>
            For example, a 1920 × 1080 video simplifies to a{" "}
            <strong>16:9</strong> aspect ratio.
          </p>

          <h2>Popular Aspect Ratios</h2>

          <ul>
            <li>
              <strong>16:9</strong> — YouTube videos, TVs and widescreen
              displays
            </li>
            <li>
              <strong>9:16</strong> — TikTok, Instagram Reels and YouTube
              Shorts
            </li>
            <li>
              <strong>1:1</strong> — Square social media posts
            </li>
            <li>
              <strong>4:3</strong> — Classic video and older displays
            </li>
            <li>
              <strong>3:2</strong> — Common photography format
            </li>
            <li>
              <strong>21:9</strong> — Ultrawide monitors and cinematic
              displays
            </li>
          </ul>

          <h2>Why Aspect Ratio Matters</h2>

          <p>
            Using the correct aspect ratio helps prevent unwanted cropping,
            stretching, or empty space when publishing images and videos on
            websites and social media platforms.
          </p>
        </section>

        {/* FAQ */}
        <section
          style={{
            marginTop: "45px",
            lineHeight: "1.7",
          }}
        >
          <h2>Frequently Asked Questions</h2>

          <h3>What is the aspect ratio of 1920 × 1080?</h3>
          <p>
            1920 × 1080 has an aspect ratio of <strong>16:9</strong>.
          </p>

          <h3>What is the aspect ratio of 1080 × 1920?</h3>
          <p>
            1080 × 1920 has an aspect ratio of <strong>9:16</strong>,
            which is commonly used for vertical videos.
          </p>

          <h3>What aspect ratio is best for YouTube?</h3>
          <p>
            Standard widescreen YouTube videos commonly use a{" "}
            <strong>16:9</strong> aspect ratio.
          </p>

          <h3>What aspect ratio is used for Shorts and Reels?</h3>
          <p>
            Vertical short-form videos commonly use a <strong>9:16</strong>{" "}
            aspect ratio.
          </p>
        </section>
      </div>
    </main>
  );
}
