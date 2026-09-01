"use client";

import { useState } from "react";

export default function AspectRatioTool() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  const gcd = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }

    return a;
  };

  const calculateRatio = () => {
    const w = Number(width);
    const h = Number(height);

    if (!w || !h || w <= 0 || h <= 0) {
      setResult("Please enter valid width and height.");
      return;
    }

    const divisor = gcd(w, h);

    setResult(`${w / divisor}:${h / divisor}`);
  };

  const clearAll = () => {
    setWidth("");
    setHeight("");
    setResult("");
  };

  const useRatio = (w, h) => {
    setWidth(String(w));
    setHeight(String(h));

    const divisor = gcd(w, h);
    setResult(`${w / divisor}:${h / divisor}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      calculateRatio();
    }
  };

  return (
    <main className="tool-page">
      <div className="tool-container">

        {/* HERO */}
        <section className="tool-hero">
          <div className="tool-badge">
            Free Online Tool
          </div>

          <h1>
            Aspect Ratio Calculator
          </h1>

          <p>
            Quickly calculate the aspect ratio of images, videos, screens,
            photos, and other rectangular dimensions.
          </p>
        </section>

        {/* CALCULATOR */}
        <section className="calculator-card">

          <div className="input-grid">

            <div className="input-group">
              <label htmlFor="width">
                Width
              </label>

              <input
                id="width"
                type="number"
                min="1"
                inputMode="numeric"
                placeholder="e.g. 1920"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>

            <div className="input-group">
              <label htmlFor="height">
                Height
              </label>

              <input
                id="height"
                type="number"
                min="1"
                inputMode="numeric"
                placeholder="e.g. 1080"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>

          </div>

          <div className="button-row">

            <button
              type="button"
              className="primary-button"
              onClick={calculateRatio}
            >
              Calculate Ratio
            </button>

            <button
              type="button"
              className="secondary-button"
              onClick={clearAll}
            >
              Clear
            </button>

          </div>

          {result && (
            <div
              className={`ratio-result ${
                result.includes(":") ? "" : "ratio-error"
              }`}
            >
              {result.includes(":") ? (
                <>
                  <span>Your Aspect Ratio</span>
                  <strong>{result}</strong>
                </>
              ) : (
                <strong className="error-message">
                  {result}
                </strong>
              )}
            </div>
          )}

        </section>

        {/* COMMON RATIOS */}
        <section className="popular-section">

          <h2>Common Aspect Ratios</h2>

          <p>
            Select a popular ratio to instantly use it in the calculator.
          </p>

          <div className="ratio-grid">

            <button
              type="button"
              className="ratio-card"
              onClick={() => useRatio(1920, 1080)}
            >
              <strong>16:9</strong>
              <span>YouTube / TV</span>
            </button>

            <button
              type="button"
              className="ratio-card"
              onClick={() => useRatio(1080, 1920)}
            >
              <strong>9:16</strong>
              <span>Reels / Shorts / TikTok</span>
            </button>

            <button
              type="button"
              className="ratio-card"
              onClick={() => useRatio(1080, 1080)}
            >
              <strong>1:1</strong>
              <span>Square Posts</span>
            </button>

            <button
              type="button"
              className="ratio-card"
              onClick={() => useRatio(1920, 1440)}
            >
              <strong>4:3</strong>
              <span>Classic Video</span>
            </button>

            <button
              type="button"
              className="ratio-card"
              onClick={() => useRatio(1500, 1000)}
            >
              <strong>3:2</strong>
              <span>Photography</span>
            </button>

            <button
              type="button"
              className="ratio-card"
              onClick={() => useRatio(2520, 1080)}
            >
              <strong>21:9</strong>
              <span>Ultrawide</span>
            </button>

          </div>

        </section>

        {/* INFORMATION */}
        <section className="tool-content">

          <h2>What Is an Aspect Ratio?</h2>

          <p>
            An aspect ratio describes the proportional relationship between
            the width and height of an image, video, display, or other
            rectangular content. It is normally written as two numbers
            separated by a colon, such as 16:9.
          </p>

          <h2>How to Calculate Aspect Ratio</h2>

          <p>
            Enter the width and height of your image, video, or screen.
            This calculator finds the greatest common divisor and simplifies
            the dimensions into the smallest possible ratio.
          </p>

          <h2>Popular Aspect Ratios</h2>

          <p>
            Different platforms and devices use different aspect ratios.
            YouTube and widescreen displays commonly use 16:9, while TikTok,
            Instagram Reels, and YouTube Shorts commonly use 9:16.
            Square social media posts commonly use 1:1.
          </p>

          <div className="ratio-list">

            <div>
              <strong>16:9</strong>
              <span>
                YouTube videos, TVs and widescreen displays
              </span>
            </div>

            <div>
              <strong>9:16</strong>
              <span>
                TikTok, Instagram Reels and YouTube Shorts
              </span>
            </div>

            <div>
              <strong>1:1</strong>
              <span>
                Square social media posts
              </span>
            </div>

            <div>
              <strong>4:3</strong>
              <span>
                Classic displays and older video formats
              </span>
            </div>

            <div>
              <strong>3:2</strong>
              <span>
                Photography and traditional cameras
              </span>
            </div>

            <div>
              <strong>21:9</strong>
              <span>
                Ultrawide monitors and cinematic displays
              </span>
            </div>

          </div>

          <h2>Why Is Aspect Ratio Important?</h2>

          <p>
            Using the correct aspect ratio helps images and videos fit
            properly on different platforms without unwanted cropping,
            stretching, or empty space. It is especially useful when
            creating content for social media, websites, presentations,
            and video platforms.
          </p>

        </section>

        {/* HOW IT WORKS */}
        <section className="steps-section">

          <h2>How This Tool Works</h2>

          <div className="steps">

            <div className="step">
              <div className="step-number">01</div>

              <h3>Enter Dimensions</h3>

              <p>
                Enter the width and height of your image, video, or screen.
              </p>
            </div>

            <div className="step">
              <div className="step-number">02</div>

              <h3>Calculate</h3>

              <p>
                Click Calculate Ratio to simplify the dimensions.
              </p>
            </div>

            <div className="step">
              <div className="step-number">03</div>

              <h3>Get Your Ratio</h3>

              <p>
                Instantly get the simplified aspect ratio for your content.
              </p>
            </div>

          </div>

        </section>

      </div>
    </main>
  );
}
