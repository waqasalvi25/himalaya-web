import { useState } from "react";
import { images } from "@/lib/images";

const bannerVideoId = "yWYwLh2zXHk";
const bannerVideoSrc = `https://www.youtube.com/embed/${bannerVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${bannerVideoId}&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1`;

export function HeroSection() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="him-hero" aria-label="Himalayan pink salt">
      <img src={images.hero} alt="" className="him-hero-media" />
      <iframe
        className={`him-hero-youtube${videoReady ? " is-ready" : ""}`}
        src={bannerVideoSrc}
        title="Himalaya banner video"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        onLoad={() => setVideoReady(true)}
      />
      <div className="him-hero-copy">
        <h1 className="him-hero-title">Crafted by Nature</h1>
      </div>
    </section>
  );
}
