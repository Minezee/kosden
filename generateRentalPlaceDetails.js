const fs = require("fs");
const path = require("path");
const slugify = require("slugify");

const rentalImagesDir = path.join(__dirname, "public/images/rental");
const existingDataPath = path.join(__dirname, "./src/utils/data/rentalPlaceDetails.ts");

const defaultDetails = {
    address: "",
    havePremium: true,
    overview: "",
    facility: "",
    googleMapURL: "",
    iframeSrc: "",
};

function isImageFile(filename) {
    return /\.(jpe?g|png|webp)$/i.test(filename);
}

function loadExistingData() {
    if (!fs.existsSync(existingDataPath)) return {};

    const raw = fs.readFileSync(existingDataPath, "utf-8");

    try {
        // Gunakan RegEx yang menangkap isi objek setelah 'export const ... ='
        const match = raw.match(/export const rentalPlaceDetails\s*=\s*(\{[\s\S]*\});?$/);
        if (!match) {
            console.warn("⚠️ Tidak ditemukan ekspor rentalPlaceDetails yang valid.");
            return {};
        }

        const jsonStr = match[1];

        // Pakai Function constructor, karena JSON.parse akan gagal untuk string kutip tunggal atau trailing koma
        const parsed = Function('"use strict"; return (' + jsonStr + ')')();
        return parsed;
    } catch (err) {
        console.error("❌ Failed to parse existing rentalPlaceDetails.ts:", err);
        return {};
    }
}

function generateRentalData(existingData) {
    const kosDirs = fs.readdirSync(rentalImagesDir).filter((dir) => {
        const fullPath = path.join(rentalImagesDir, dir);
        return fs.statSync(fullPath).isDirectory();
    });

    const result = { ...existingData };

    kosDirs.forEach((kosName) => {
        const slug = slugify(kosName, { lower: true });

        if (result[slug]) {
            // Sudah ada, skip
            return;
        }

        const kosPath = path.join(rentalImagesDir, kosName);
        const images = fs
            .readdirSync(kosPath)
            .filter((file) => isImageFile(file))
            .map((file) => `/images/rental/${kosName}/${file}`);

        result[slug] = {
            name: kosName,
            ...defaultDetails,
            roomVariant: {
                basic: {
                    heroImage: images[0] || "",
                    price: 0,
                    images,
                },
                premium: {
                    heroImage: images[1] || "",
                    price: 0,
                    images: [],
                },
            },
        };
    });

    return result;
}

function writeToFile(data) {
    const fileContent = "export const rentalPlaceDetails = " + JSON.stringify(data, null, 4) + ";";
    fs.writeFileSync(existingDataPath, fileContent, "utf-8");
    console.log(`✅ rentalPlaceDetails.ts updated with ${Object.keys(data).length} kos.`);
}

// Run
const existingData = loadExistingData();
const updatedData = generateRentalData(existingData);
writeToFile(updatedData);
