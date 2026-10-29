# Bingqi Huang — Robotics Research

Personal website at **https://bingqi-huang.github.io/**. A responsive, dependency-free static site for GitHub Pages.

## Editing

- `index.html`: biography, research, robotic systems, experience, education, honors, and selected publications.
- `static/css/portfolio.css`: layout, typography, colors, mobile breakpoints, and reduced-motion support.
- `static/js/portfolio.js`: mobile navigation and publication filtering.
- `static/assets/img/`: portrait and LunarBot photographs, optimized as WebP.
- `docs/Bingqi_Huang_Resume.pdf`: current downloadable resume.
- `docs/CV_HBQ.pdf`: compatibility copy for existing CV links.

No build step or third-party JavaScript is required. The page works directly from the repository root. Configure GitHub Pages to publish the root of the selected branch.

For a conventional local environment, preview with `python3 -m http.server 8000`, then visit `http://localhost:8000`. Managed ChatGPT environments use their provided preview service.

## Updating project media

Replace the LunarBot image sources in `index.html` with the new assets. To add a demo video, use native HTML controls and a poster image; avoid autoplay with sound:

```html
<video controls playsinline preload="metadata" poster="static/assets/img/lunarbot.webp">
  <source src="static/assets/video/lunarbot-demo.mp4" type="video/mp4">
  <track kind="captions" src="static/assets/video/lunarbot-demo.vtt" srclang="en" label="English">
</video>
```

Prefer short compressed MP4 clips or an external video link for large recordings. No video placeholders or unavailable project links are shown in the live page.

## Content notes

AGIBOT work is described only at a broad level. LunarBot-Mini is explicitly in development; Thoth is a manuscript in preparation; arXiv papers are identified as preprints. Research metrics and publication details follow the October 2026 resume. The older `contents/` directory and Bootstrap template assets are retained for reference and are not loaded by the new page.
