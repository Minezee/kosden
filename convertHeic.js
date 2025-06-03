// convertHeic.js
const fs = require("fs");
const path = require("path");
const convert = require("heic-convert");
const sharp = require("sharp");

const rentalDir = path.join(__dirname, "public/images/rental");

async function convertHeicFile(inputPath, outputPath) {
    const inputBuffer = fs.readFileSync(inputPath);
    const outputBuffer = await convert({
        buffer: inputBuffer,
        format: "JPEG",
        quality: 1,
    });
    fs.writeFileSync(outputPath, outputBuffer);
    console.log(`✅ Converted: ${outputPath}`);
    fs.unlinkSync(inputPath); // Optional: delete original
}

async function convertHeicRecursive(dir) {
    const entries = fs.readdirSync(dir);

    for (const entry of entries) {
        const fullPath = path.join(dir, entry);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            await convertHeicRecursive(fullPath);
        } else if (entry.toLowerCase().endsWith(".heic")) {
            const outputName = entry.replace(/\.heic$/i, ".jpeg");
            const outputPath = path.join(dir, outputName);
            await convertHeicFile(fullPath, outputPath);
        }
    }
}

convertHeicRecursive(rentalDir).then(() => {
    console.log("🎉 All HEIC files converted to JPEG.");
});
