"use client";

import { useState } from "react";

export default function EngagementCalculator() {
  const [likes, setLikes] = useState("");
  const [comments, setComments] = useState("");
  const [shares, setShares] = useState("");
  const [saves, setSaves] = useState("");
  const [followers, setFollowers] = useState("");
  const [result, setResult] = useState(null);

  const calculateEngagement = () => {
    const l = Number(likes) || 0;
    const c = Number(comments) || 0;
    const s = Number(shares) || 0;
    const sv = Number(saves) || 0;
    const f = Number(followers) || 0;

    if (f <= 0) {
      setResult(null);
      return;
    }

    const totalEngagement = l + c + s + sv;
    const rate = (totalEngagement / f) * 100;

    let rating = "Low";
    if (rate >= 10) {
      rating = "Excellent";
    } else if (rate >= 5) {
      rating = "Very Good";
    } else if (rate >= 2) {
      rating = "Good";
    } else if (rate >= 1) {
      rating = "Average";
    }

    setResult({
      total: totalEngagement,
      rate: rate.toFixed(2),
      rating,
    });
  };

  const clearCalculator = () => {
    setLikes("");
    setComments("");
    setShares("");
    setSaves("");
    setFollowers("");
    setResult(null);
  };

  return (
    <main className="tool-page">
      <h1>Engagement Calculator</h1>

      <p>
        Calculate your social media engagement rate using likes, comments,
        shares, saves, and followers.
      </p>

      <div className="calculator-card">
        <label>Likes</label>
        <input
          type="number"
          min="0"
          placeholder="e.g. 1250"
          value={likes}
          onChange={(e) => setLikes(e.target.value)}
        />

        <label>Comments</label>
        <input
          type="number"
          min="0"
          placeholder="e.g. 85"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />

        <label>Shares</label>
        <input
          type="number"
          min="0"
          placeholder="e.g. 120"
          value={shares}
          onChange={(e) => setShares(e.target.value)}
        />

        <label>Saves</label>
        <input
          type="number"
          min="0"
          placeholder="e.g. 75"
          value={saves}
          onChange={(e) => setSaves(e.target.value)}
        />

        <label>Total Followers</label>
        <input
          type="number"
          min="1"
          placeholder="e.g. 10000"
          value={followers}
          onChange={(e) => setFollowers(e.target.value)}
        />

        <button onClick={calculateEngagement}>
          📊 Calculate Engagement
        </button>

        <button className="clear-btn" onClick={clearCalculator}>
          Clear
        </button>

        {result && (
          <div className="result-box">
            <h2>Your Engagement Rate</h2>

            <div className="rate">
              {result.rate}%
            </div>

            <p>
              Total Engagements: <strong>{result.total}</strong>
            </p>

            <p>
              Performance: <strong>{result.rating}</strong>
            </p>

            <small>
              Engagement rate = (Likes + Comments + Shares + Saves) ÷
              Followers × 100
            </small>
          </div>
        )}
      </div>

      <section className="info-section">
        <h2>What is an Engagement Rate?</h2>

        <p>
          Engagement rate measures how actively people interact with your
          social media content. It can help creators and businesses understand
          how well their posts connect with their audience.
        </p>

        <h2>How to Improve Engagement</h2>

        <ul>
          <li>Create useful and original content.</li>
          <li>Use strong hooks in the first few seconds.</li>
          <li>Ask questions to encourage comments.</li>
          <li>Post consistently for your target audience.</li>
          <li>Experiment with different content formats.</li>
        </ul>
      </section>
    </main>
  );
}
