import { useEffect, useState } from "react";
import { images } from "@/lib/images";

const PRELOADER_MS = 5200;

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("him-preloading");
    const timer = window.setTimeout(() => {
      setVisible(false);
      document.documentElement.classList.remove("him-preloading");
    }, PRELOADER_MS);
    return () => {
      window.clearTimeout(timer);
      document.documentElement.classList.remove("him-preloading");
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="him-preloader" aria-hidden="true">
      <div className="him-pre-lockup">
        <div className="him-pre-word">
          <img src={images.preHim} alt="" className="him-pre-him" />
          <img src={images.preMark} alt="" className="him-pre-mark" />
          <img src={images.preLaya} alt="" className="him-pre-laya" />
        </div>
        <div className="him-pre-company">
          <span />
          <p>Salt Company (Pvt) Limited</p>
          <span />
        </div>
        <p className="him-pre-tag">Where Himalayan Purity Meets Everyday Life</p>
      </div>
    </div>
  );
}
