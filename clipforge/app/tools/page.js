import { Header, Footer } from "../components";

export default function Tools() {
  const tools = [
    ["Content Repurposer", "/content-repurposer", "Turn one piece of content into platform-ready ideas."],
    ["Viral Hook Generator", "/viral-hook-generator", "Generate attention-grabbing hooks for short-form content."],
    ["AI Caption Generator", "/caption-generator", "Create engaging captions for your social media content."],
    ["Hashtag Generator", "/tools/hashtag-generator", "Discover relevant hashtags for your niche."],
    ["Video Title Generator", "/tools/video-title-generator", "Create stronger titles for short-form videos."],
    ["Engagement Calculator", "/tools/engagement-calculator", "Calculate your social media engagement rate."],
    ["Aspect Ratio Tool", "/tools/aspect-ratio", "Find the right aspect ratio for your content."]
  ];

  return (
    <>
      <Header />

      <main className="tool-page">
        <h1>Creator Tools</h1>

        <p>Explore ClipForge&apos;s growing toolkit.</p>

        <div className="tools-grid">
          {tools.map(([name, link, description]) => (
            <div className="tool-card" key={name}>
              <h2>{name}</h2>

              <p>{description}</p>

              <a href={link}>Open →</a>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
