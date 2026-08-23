import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "bce_intro_played_at";
const COOLDOWN_MS = 1000 * 60 * 60 * 24; // 24h
const VIDEO_DURATION_MS = 10_000;
const VIMEO_ID = "1188257621";

const IntroSplash = () => {
  const [show, setShow] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const endedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const last = Number(localStorage.getItem(STORAGE_KEY) || 0);
      if (last && Date.now() - last < COOLDOWN_MS) return;
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      // ignore storage errors and just play once
    }
    setShow(true);
    const t = window.setTimeout(() => handleEnd(), VIDEO_DURATION_MS + 800);

    const onMessage = (e: MessageEvent) => {
      if (typeof e.data !== "string") return;
      try {
        const data = JSON.parse(e.data);
        if (data?.event === "ended") handleEnd();
      } catch {
        // not a vimeo player message
      }
    };
    window.addEventListener("message", onMessage);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("message", onMessage);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEnd = () => {
    if (endedRef.current) return;
    endedRef.current = true;
    setFadeOut(true);
    window.setTimeout(() => setShow(false), 600);
  };

  const handleSkip = () => handleEnd();

  const handleIframeLoad = () => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ method: "addEventListener", value: "ended" }),
      "*"
    );
  };

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background overflow-hidden ${
        fadeOut ? "animate-fade-out" : "animate-fade-in"
      }`}
      style={{ transition: "opacity 600ms ease", opacity: fadeOut ? 0 : 1 }}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-background">
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${VIMEO_ID}?autoplay=1&muted=1&controls=0&background=1&autopause=0&loop=0&playsinline=1`}
          title="Boss Chick intro animation"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          onLoad={handleIframeLoad}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[max(100vw,calc(100vh*16/9))] h-[max(100vh,calc(100vw*9/16))] pointer-events-none"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 55%, hsl(var(--background)) 100%)",
          }}
        />
      </div>
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 px-4 py-2 rounded-full border border-primary/40 bg-background/60 backdrop-blur text-sm uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        aria-label="Skip intro"
      >
        Skip Intro →
      </button>
    </div>
  );
};

export default IntroSplash;
