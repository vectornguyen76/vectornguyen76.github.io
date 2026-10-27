// Project demo videos: play muted while on screen, pause when scrolled away.
// They ship with native controls and `preload="none"`, so readers without JS,
// or who prefer reduced motion, get a static poster and download nothing.
(() => {
  const videos = document.querySelectorAll("video[data-autoplay]");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (
    !videos.length ||
    prefersReducedMotion ||
    !("IntersectionObserver" in window)
  )
    return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const { target: video, isIntersecting } of entries) {
        if (!isIntersecting) {
          video.pause();
          continue;
        }
        // Autoplay can still be refused (e.g. iOS Low Power Mode): hand control back.
        video.play().catch(() => {
          video.controls = true;
          observer.unobserve(video);
        });
      }
    },
    { threshold: 0.4 },
  );

  for (const video of videos) {
    video.controls = false;
    observer.observe(video);
  }
})();
