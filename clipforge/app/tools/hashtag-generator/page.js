"use client";

import { useState } from "react";

export default function HashtagGenerator() {
  const [topic, setTopic] = useState("");
  const [hashtags, setHashtags] = useState([]);

  const generateHashtags = () => {
    if (!topic.trim()) return;

    const cleanTopic = topic
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .trim()
      .split(/\s+/)
      .join("");

    const words = topic
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .split(/\s+/)
      .filter(Boolean);

    const generated = [
      `#${cleanTopic}`,
      ...words.map((word) => `#${word}`),
      "#contentcreator",
      "#socialmedia",
      "#marketing",
      "#viral",
      "#trending",
      "#instagram",
      "#reels",
      "#creator",
      "#digitalmarketing",
      "#growth",
    ];

    setHashtags([...new Set(generated)].slice(0, 15));
  };

  const copyHashtags = () => {
    navigator.clipboard.writeText(hashtags.join(" "));
  };

  return (
    <main className="tool-page">
      <h1>Hashtag Generator</h1>
      <p>Generate relevant hashtags for your social media content.</p>

      <label>What is your content about?</label>

      <input
        type="text"
        placeholder="e.g. AI tools for small business"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button onClick={generateHashtags}>
        # Generate Hashtags
      </button>

      {hashtags.length > 0 && (
        <div className="results">
          <h2>Your Hashtags</h2>

          <div className="hashtag-list">
            {hashtags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>

          <button className="copy-btn" onClick={copyHashtags}>
            Copy Hashtags
          </button>
        </div>
      )}
    </main>
  );
}
