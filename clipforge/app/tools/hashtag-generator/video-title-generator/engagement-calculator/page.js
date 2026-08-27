"use client";

import { useState } from "react";

export default function EngagementCalculator() {
  const [followers, setFollowers] = useState("");
  const [likes, setLikes] = useState("");
  const [comments, setComments] = useState("");
  const [shares, setShares] = useState("");
  const [result, setResult] = useState(null);

  const calculateEngagement = () => {
    const totalFollowers = Number(followers);
    const totalLikes = Number(likes);
    const totalComments = Number(comments);
    const totalShares = Number(shares);

    if (!totalFollowers || totalFollowers <= 0) {
      setResult(null);
      return;
    }

    const totalEngagement =
      totalLikes + totalComments + totalShares;

    const engagementRate =
      (totalEngagement / totalFollowers) * 100;

    setResult({
      totalEngagement,
      engagementRate: engagementRate.toFixed(2),
    });
  };

  return (
    <main className="tool-page">
      <h1>Engagement Calculator</h1>

      <p>
        Calculate your social media engagement rate quickly and easily.
      </p>

      <label>Total Followers</label>
      <input
        type="number"
        placeholder="e.g. 10000"
        value={followers}
        onChange={(e) => setFollowers(e.target.value)}
      />

      <label>Total Likes</label>
      <input
        type="number"
        placeholder="e.g. 500"
        value={likes}
        onChange={(e) => setLikes(e.target.value)}
      />

      <label>Total Comments</label>
      <input
        type="number"
        placeholder="e.g. 50"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />

      <label>Total Shares</label>
      <input
        type="number"
        placeholder="e.g. 25"
        value={shares}
        onChange={(e) => setShares(e.target.value)}
      />

      <button onClick={calculateEngagement}>
        📊 Calculate Engagement
      </button>

      {result && (
        <div className="results">
          <h2>Your Results</h2>

          <div className="result-card">
            <p>Total Engagement</p>
            <h3>{result.totalEngagement}</h3>
          </div>

          <div className="result-card">
            <p>Engagement Rate</p>
            <h3>{result.engagementRate}%</h3>
          </div>
        </div>
      )}
    </main>
  );
}
