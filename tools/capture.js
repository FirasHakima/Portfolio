// Usage:
//  A) auto screenshots (app must be running):  node tools/capture.js <slug> <baseUrl> [route ...]
//     e.g. node tools/capture.js hyundai-hub http://localhost:5173 / /login /booking /admin
//  B) manual screenshots already in assets/projects/<slug>/ :  node tools/capture.js <slug> --manifest
const fs = require("fs"), path = require("path");
const [slug, base, ...routes] = process.argv.slice(2);
if (!slug) { console.log("Missing <slug>"); process.exit(1); }
const dir = path.join(__dirname, "..", "assets", "projects", slug);
fs.mkdirSync(dir, { recursive: true });
const writeManifest = () => {
  const files = fs.readdirSync(dir).filter(f => /\.(png|jpe?g|webp)$/i.test(f)).sort();
  const screens = files.map(f => ({ file: f, label: f.replace(/^\d+[-_]?/, "").replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ") || f }));
  fs.writeFileSync(path.join(dir, "manifest.json"), JSON.stringify({ screens }, null, 2));
  console.log(`manifest.json written with ${screens.length} screens in ${dir}`);
};
(async () => {
  if (!base || base === "--manifest") return writeManifest();
  const { chromium } = require("playwright");
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1366, height: 800 } });
  let n = 1;
  for (const r of (routes.length ? routes : ["/"])) {
    try {
      await page.goto(base.replace(/\/$/, "") + r, { waitUntil: "networkidle", timeout: 30000 });
      await page.waitForTimeout(800);
      const name = String(n++).padStart(2, "0") + "-" + (r.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") || "home") + ".png";
      await page.screenshot({ path: path.join(dir, name), fullPage: true });
      console.log("saved", name);
    } catch (e) { console.log("skipped", r, e.message.split("\n")[0]); }
  }
  await browser.close(); writeManifest();
})();
