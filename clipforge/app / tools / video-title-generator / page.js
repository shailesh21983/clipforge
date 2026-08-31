"use client";

import { useState } from "react";

export default function VideoTitleGenerator() {
  const [topic, setTopic] = useState("");
  const [titles, setTitles] = useState([]);
  const [copied, setCopied] = useState("");

  const generateTitles = () => {
    const value = topic.trim();

    if (!value) {
      setTitles([]);
      return;
    }

    const generatedTitles = [
      `The Ultimate Guide to ${value}`,
      `10 Things You Need to Know About ${value}`,
      `How to Master ${value} in 2026`,
      `I Tried ${value} — Here's What Happened`,
      `The Truth About ${value}`,
      `Stop Doing ${value} Wrong`,
      `Beginner's Guide to ${value}`,
      `Everything You Need to Know About ${value}`,
      `How ${value} Can Change Everything`,
      `${value}: Tips Nobody Tells You`,
    ];

    setTitles(generatedTitles);
    setCopied("");
  };

  const copyTitle = async (title, index) => {
    try {
      await navigator.clipboard.writeText(title);
      setCopied(index);
      setTimeout(() => setCopied(""), 1500);
    } catch {
      setCopied("");
    }
  };

  return (
    <main className="toolpage">
      <div className="wrap">

        <div style={{ maxWidth: "850px", margin: "0 auto", textAlign: "center" }}>
          <div className="badge">
            ✨ Free Creator Tool
          </div>

          <h1>
            Video Title Generator
          </h1>

          <p className="muted" style={{ fontSize: "18px", marginBottom: "30px" }}>
            Generate catchy, clickable video titles for YouTube, TikTok,
            Instagram Reels and Shorts in seconds.
          </p>
        </div>

        <div className="toolbox">

          <label
            style={{
              display: "block",
              fontWeight: "700",
              marginBottom: "10px",
              fontSize: "16px"
            }}
          >
            What is your video about?
          </label>

          <textarea
            className="textarea"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Example: AI tools for small business"
          />

          <div className="chips">
            <button
              type="button"
              className="chip"
              onClick={() => setTopic("AI tools for beginners")}
            >
              AI Tools
            </button>

            <button
              type="button"
              className="chip"
              onClick={() => setTopic("YouTube growth tips")}
            >
              YouTube Growth
            </button>

            <button
              type="button"
              className="chip"
              onClick={() => setTopic("Fitness tips")}
            >
              Fitness
            </button>

            <button
              type="button"
              className="chip"
              onClick={() => setTopic("Make money online")}
            >
              Make Money
            </button>
          </div>

          <button
            type="button"
            className="btn"
            onClick={generateTitles}
            style={{ width: "100%", fontSize: "16px" }}
          >
            🚀 Generate Video Titles
          </button>

          {titles.length > 0 && (
            <div className="output">

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "4px"
                }}
              >
                <h2 style={{ margin: 0, fontSize: "24px" }}>
                  Your Video Titles
                </h2>

                <span className="small">
                  {titles.length} ideas generated
                </span>
              </div>

              {titles.map((title, index) => (
                <div
                  className="result"
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "15px"
                  }}
                >
                  <span style={{ flex: 1 }}>
                    <strong style={{ color: "#8b7cff" }}>
                      {index + 1}.
                    </strong>{" "}
                    {title}
                  </span>

                  <button
                    type="button"
                    className="btn secondary"
                    onClick={() => copyTitle(title, index)}
                    style={{
                      padding: "9px 13px",
                      minWidth: "78px"
                    }}
                  >
                    {copied === index ? "✓ Copied" : "Copy"}
                  </button>
                </div>
              ))}

            </div>
          )}

        </div>

        <section
          className="section"
          style={{
            maxWidth: "900px",
            margin: "0 auto"
          }}
        >
          <h2>Why Use a Video Title Generator?</h2>

          <p className="muted">
            Your video title is one of the first things viewers see.
            A strong title can create curiosity, communicate value and
            encourage people to click and watch your content.
          </p>

          <div className="grid">

            <div className="card">
              <div className="icon">🎯</div>
              <h3>Catchy Ideas</h3>
              <p className="muted">
                Get multiple title ideas so you can choose the one that
                best fits your video.
              </p>
            </div>

            <div className="card">
              <div className="icon">⚡</div>
              <h3>Save Time</h3>
              <p className="muted">
                Generate 10 different title concepts in seconds instead
                of starting from a blank page.
              </p>
            </div>

            <div className="card">
              <div className="icon">📱</div>
              <h3>Made for Creators</h3>
              <p className="muted">
                Create ideas suitable for YouTube, Shorts, TikTok and
                other short-form content.
              </p>
            </div>

          </div>
        </section>

        <section
          style={{
            maxWidth: "900px",
            margin: "0 auto 50px"
          }}
        >
          <div className="card">

            <h2 style={{ marginTop: 0 }}>
              How to Create Better Video Titles
            </h2>

            <div className="steps">

              <div>
                <div className="stepnum">01</div>
                <h3>Choose Your Topic</h3>
                <p className="muted">
                  Enter the main subject or idea of your video.
                </p>
              </div>

              <div>
                <div className="stepnum">02</div>
                <h3>Generate Ideas</h3>
                <p className="muted">
                  Click the generate button to create multiple title ideas.
                </p>
              </div>

              <div>
                <div className="stepnum">03</div>
                <h3>Pick & Copy</h3>
                <p className="muted">
                  Choose your favorite title and copy it with one click.
                </p>
              </div>

            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
