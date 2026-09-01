"use client";

import { useState } from "react";

export default function AspectRatioTool() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  const gcd = (a, b) => {
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
    const ratio = `${w / divisor}:${h / divisor}`;

    setResult(ratio);
  };

  const clearAll = () => {
    setWidth("");
    setHeight("");
    setResult("");
  };

  const useRatio = (w, h) => {
    setWidth(w);
    setHeight(h);
    setResult("");
  };

  return (
    <main className="tool-page">
      <div className="tool-container">

        {/* Hero */}
        <section className="tool-hero">
          <div className="tool-badge">Free Online Tool</div>

          <h1>Aspect Ratio Calculator</h1>

          <p>
            Quickly calculate the aspect ratio of images, videos, screens,
            photos, and other rectangular dimensions.
          </p>
        </section>

        {/* Calculator */}
        <section className="calculator-card">

          <div className="input-grid">

            <div className="input-group">
              <label htmlFor="width">Width</label>

              <input
                id="width"
                type="number"
                placeholder="e.g. 1920"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="height">Height</label>

              <input
                id="height"
                type="number"
                placeholder="e.g. 1080"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

          </div>

          <div className="button-row">

            <button
              className="primary-button"
              onClick={calculateRatio}
            >
              Calculate Ratio
            </button>

            <button
              className="secondary-button"
              onClick={clearAll}
            >
              Clear
            </button>

          </div>

          {result && (
            <div className="ratio-result">

              {result.includes(":") ? (
                <>
                  <span>Your Aspect Ratio</span>
                  <strong>{result}</strong>
                </>
              ) : (
                <strong className="error-message">{result}</strong>
              )}

            </div>
          )}

        </section>

        {/* Popular Ratios */}
        <section className="popular-section">

          <h2>Common Aspect Ratios</h2>

          <p>
            Select a popular ratio to instantly use it in the calculator.
          </p>

          <div className="ratio-grid">

            <button
              className="ratio-card"
              onClick={() => useRatio(1920, 1080)}
            >
              <strong>16:9</strong>
              <span>YouTube / TV</span>
            </button>

            <button
              className="ratio-card"
              onClick={() => useRatio(1080, 1920)}
            >
              <strong>9:16</strong>
              <span>Reels / Shorts / TikTok</span>
            </button>

            <button
              className="ratio-card"
              onClick={() => useRatio(1080, 1080)}
            >
              <strong>1:1</strong>
              <span>Square Posts</span>
            </button>

            <button
              className="ratio-card"
              onClick={() => useRatio(1920, 1440)}
            >
              <strong>4:3</strong>
              <span>Classic Video</span>
            </button>

            <button
              className="ratio-card"
              onClick={() => useRatio(1500, 1000)}
            >
              <strong>3:2</strong>
              <span>Photography</span>
            </button>

            <button
              className="ratio-card"
              onClick={() => useRatio(2520, 1080)}
            >
              <strong>21:9</strong>
              <span>Ultrawide</span>
            </button>

          </div>

        </section>

        {/* Information */}
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
            Enter the width and height of your image or video above. The
            calculator finds the greatest common divisor and simplifies the
            dimensions into the smallest possible ratio.
          </p>

          <h2>Popular Aspect Ratios</h2>

          <p>
            Different platforms use different aspect ratios. YouTube and
            widescreen displays commonly use 16:9, while TikTok, Instagram
            Reels, and YouTube Shorts commonly use 9:16. Square social media
            posts commonly use 1:1.
          </p>

          <div className="ratio-list">

            <div>
              <strong>16:9</strong>
              <span> YouTube videos, TVs and widescreen displays</span>
            </div>

            <div>
              <strong>9:16</strong>
              <span> TikTok, Instagram Reels and YouTube Shorts</span>
            </div>

            <div>
              <strong>1:1</strong>
              <span> Square social media posts</span>
            </div>

            <div>
              <strong>4:3</strong>
              <span> Classic displays and older video formats</span>
            </div>

            <div>
              <strong>3:2</strong>
              <span> Photography and traditional cameras</span>
            </div>

            <div>
              <strong>21:9</strong>
              <span> Ultrawide monitors and cinematic displays</span>
            </div>

          </div>

          <h2>Why Is Aspect Ratio Important?</h2>

          <p>
            Using the correct aspect ratio helps your images and videos fit
            properly on different platforms without unwanted cropping,
            stretching, or empty space. This is especially important when
            creating content for social media, websites, presentations, and
            video platforms.
          </p>

        </section>

        {/* How it works */}
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
                Click the calculate button to simplify the dimensions.
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
