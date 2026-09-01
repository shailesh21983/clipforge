"use client";

import { useState } from "react";

export default function AspectRatioTool() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  const calculateRatio = () => {
    const w = Number(width);
    const h = Number(height);

    if (!w || !h || w <= 0 || h <= 0) {
      setResult("Please enter valid width and height.");
      return;
    }

    const gcd = (a, b) => {
      while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    };

    const divisor = gcd(w, h);
    const ratio = `${w / divisor}:${h / divisor}`;

    setResult(ratio);
  };

  const clearAll = () => {
    setWidth("");
    setHeight("");
    setResult("");
  };

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <h1>Aspect Ratio Calculator</h1>

      <p>
        Calculate the aspect ratio of an image, video, screen, or any
        rectangular dimension.
      </p>

      <div
        style={{
          marginTop: "30px",
          padding: "25px",
          border: "1px solid #ddd",
          borderRadius: "12px",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <label>Width</label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="e.g. 1920"
            style={{
              display: "block",
              width: "100%",
              padding: "12px",
              marginTop: "6px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Height</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g. 1080"
            style={{
              display: "block",
              width: "100%",
              padding: "12px",
              marginTop: "6px",
            }}
          />
        </div>

        <button
          onClick={calculateRatio}
          style={{
            padding: "12px 20px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          Calculate Aspect Ratio
        </button>

        <button
          onClick={clearAll}
          style={{
            padding: "12px 20px",
            cursor: "pointer",
          }}
        >
          Clear
        </button>

        {result && (
          <div
            style={{
              marginTop: "25px",
              padding: "20px",
              background: "#f5f5f5",
              borderRadius: "10px",
            }}
          >
            <h2>Aspect Ratio</h2>
            <strong style={{ fontSize: "28px" }}>{result}</strong>
          </div>
        )}
      </div>

      <section style={{ marginTop: "40px" }}>
        <h2>What is an Aspect Ratio?</h2>
        <p>
          Aspect ratio describes the proportional relationship between the
          width and height of an image, video, screen, or other rectangular
          content.
        </p>

        <h2>Common Aspect Ratios</h2>
        <ul>
          <li>16:9 — YouTube videos, TVs and widescreen displays</li>
          <li>9:16 — TikTok, Instagram Reels and YouTube Shorts</li>
          <li>1:1 — Square social media posts</li>
          <li>4:3 — Older displays and standard video</li>
          <li>21:9 — Ultrawide displays</li>
        </ul>
      </section>
    </main>
  );
}
