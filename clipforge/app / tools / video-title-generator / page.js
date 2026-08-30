"use client";

import { useState } from "react";

export default function VideoTitleGenerator() {
  const [topic, setTopic] = useState("");
  const [titles, setTitles] = useState([]);

  const generateTitles = () => {
    if (!topic.trim()) return;

    const generatedTitles = [
      `The Ultimate Guide to ${topic}`,
      `10 Things You Need to Know About ${topic}`,
      `How to Master ${topic} in 2026`,
      `I Tried ${topic} — Here's What Happened`,
      `The Truth About ${topic}`,
      `Stop Doing ${topic} Wrong`,
      `Beginner's Guide to ${topic}`,
      `Everything You Need to Know About ${topic}`,
      `How ${topic} Can Change Everything`,
      `${topic}: Tips Nobody Tells You`,
    ];

    setTitles(generatedTitles);
  };

  const copyTitle = (title) => {
    navigator.clipboard.writeText(title);
  };

  return (
    <main className="tool-page">
      <h1>Video Title Generator</h1>
      <p>Generate engaging titles for your YouTube videos and social content.</p>

      <label>What is your video about?</label>

      <input
        type="text"
        placeholder="e.g. AI tools for small business"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button onClick={generateTitles}>
        🎬 Generate Titles
      </button>

      {titles.length > 0 && (
        <div className="results">
          <h2>Your Video Titles</h2>

          <div className="title-list">
            {titles.map((title, index) => (
              <div className="title-item" key={index}>
                <span>{index + 1}. {title}</span>

                <button
                  className="copy-btn"
                  onClick={() => copyTitle(title)}
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
