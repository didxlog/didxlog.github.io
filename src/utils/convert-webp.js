import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const IMAGE_DIR = "public/media";
const QUALITY = 82;
const MAX_WIDTH = 1920;

let converted = 0;

async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            await walk(fullPath);
            continue;
        }

        if (!/\.(jpg|jpeg|png)$/i.test(entry.name)) {
            continue;
        }

        const output = fullPath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

        // 기존 WebP 삭제 (있으면)
        try {
            await fs.unlink(output);
        } catch {
            // 파일이 없으면 무시
        }

        await sharp(fullPath)
            .resize({
                width: MAX_WIDTH,
                withoutEnlargement: true,
            })
            .webp({
                quality: QUALITY,
            })
            .toFile(output);

        converted++;
        console.log(`✅ ${output}`);
    }
}

(async () => {
    console.log("🖼️ Converting images to WebP...\n");

    await walk(IMAGE_DIR);

    console.log(`\n🎉 Done! ${converted} image(s) converted.`);
})();