import { useState, useEffect } from "react";
import { MarqueeContent } from "./MarqueeContent";

export const Marquee = () => {
  const [contentCount, setContentCount] = useState(3);

  useEffect(() => {
    const updateContentCount = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 7680) {
        setContentCount(15);
      } else if (screenWidth >= 3840) {
        setContentCount(10);
      } else if (screenWidth >= 1920) {
        setContentCount(6);
      } else if (screenWidth >= 1280) {
        setContentCount(5);
      } else if (screenWidth >= 768) {
        setContentCount(4);
      } else {
        setContentCount(3);
      }
    };

    updateContentCount();

    window.addEventListener("resize", updateContentCount);

    return () => {
      window.removeEventListener("resize", updateContentCount);
    };
  }, []);

  return (
    <div className="marquee_container flex h-6">
      <div className="marquee">
        {Array.from({ length: contentCount }).map((_, index) => (
          <MarqueeContent key={`content-${index}`} />
        ))}
      </div>
      <div className="marquee">
        {Array.from({ length: contentCount }).map((_, index) => (
          <MarqueeContent key={`content-duplicate-${index}`} />
        ))}
      </div>
    </div>
  );
};
