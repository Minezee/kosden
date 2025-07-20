// uploadStrapi.js
const STRAPI_URL = 'https://kosden-cms.up.railway.app';
const API_TOKEN = '5cd17af57d68afb3c132ce9552e87d85e281a53d8f63d59d1e22b0b5b955f1271d58ae5512f4cc9ef7f47e45710796d738801b161dde11d5f900af4cb3398538b8e6cb7e52304b8e95e75572b3c83cec305bd13a714d37600a845690a0c2d0674894c7e77f5e56eb2ad3a94416a7058cf1f25887b6adc60aca8115598d624b0d';

// Data rental langsung di sini - gampang edit
const rentalPlaceDetails = {
    "dk-living": {
        name: "DK Living",
        address: "Jalan Soekarno Hatta Indah V no.7B",
        havevip: false,
        overview: "",
        facility: "",
        location: "Jalan Soekarno Hatta Indah V no.7B",
        googleMapURL:
            "https://maps.app.goo.gl/vwMV9xhtP3ACKiN56?g_st=com.google.maps.preview.copy",
        iframeSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.567996940178!2d112.62905200000002!3d-7.940104199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629004b1682c3%3A0xd3da99b14fbc5da0!2sKos%20DK%20Living!5e0!3m2!1sid!2sid!4v1723539731492!5m2!1sid!2sid",
        roomVariant: {
            basic: {
                heroImage: "/images/rental/1. Kos DK Living.jpg",
                price: 1700000,
                images: [
                    "/images/rental/DK Living/kamar.jpg",
                    "/images/rental/DK Living/kamar2.jpg",
                    "/images/rental/DK Living/kamar3.jpg",
                    "/images/rental/DK Living/kamar4.jpg",
                    "/images/rental/DK Living/kitchen.jpg",
                    "/images/rental/DK Living/laundry.jpg",
                    "/images/rental/DK Living/living.jpg",
                    "/images/rental/DK Living/living2.jpg",
                    "/images/rental/DK Living/main.jpg",
                    "/images/rental/DK Living/teras.jpg",
                    "/images/rental/DK Living/toilet.jpg",
                    "/images/rental/DK Living/toilet2.jpg",
                ],
            },
        },
    },
    "griya-artha-prima": {
        name: "Griya Artha Prima",
        address: "Jalan Candi Mendut Barat Blok C no.16",
        havevip: true,
        overview: "",
        facility: "",
        location: "Jalan Candi Mendut Barat Blok C no.16",
        googleMapURL:
            "https://maps.app.goo.gl/EVcUeFF5xRxJV96Z6?g_st=com.google.maps.preview.copy",
        iframeSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.57589782013!2d112.62708239999999!3d-7.939282800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629004d8bf979%3A0x37866423df988c0c!2sKos%20Griya%20Artha%20Prima%20Malang!5e0!3m2!1sid!2sid!4v1723540243392!5m2!1sid!2sid",
        generalImages: [
            "/images/rental/2. Kos Griya Artha Prima.jpg",
            "/images/rental/Griya Artha Prima/living1.webp",
            "/images/rental/Griya Artha Prima/kamar3.webp",
            "/images/rental/Griya Artha Prima/kamar4.webp",
            "/images/rental/Griya Artha Prima/kamar6.webp",
            "/images/rental/Griya Artha Prima/kamar8.webp",
        ],
        roomVariant: {
            basic: {
                heroImage: "/images/rental/Griya Artha Prima/standar.jpeg",
                price: 1800000,
                images: [
                ],
            },
            medium: {
                heroImage: "/images/rental/Griya Artha Prima/medium.jpeg",
                price: 2000000,
                images: [],
            },
            vip: {
                heroImage: "/images/rental/Griya Artha Prima/vip.jpeg",
                price: 2200000,
                images: [],
            },
        },
    },
    maliqa: {
        name: "Maliqa",
        address: "Jalan Candi Mendut Selatan III no.18",
        havevip: true,
        overview: "",
        facility: "",
        location: "Jalan Candi Mendut Selatan III no.18",
        googleMapURL:
            "https://maps.app.goo.gl/CYrfp3RTRZ3RJGA19?g_st=com.google.maps.preview.copy",
        iframeSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.522584325976!2d112.6344144!3d-7.944823800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6290070dc6c6f%3A0xdd1944dfc2772cd5!2sKos%20Maliqa%20Malang!5e0!3m2!1sid!2sid!4v1723540300394!5m2!1sid!2sid",
        generalImages: [
            "/images/rental/3. Kos Maliqa.jpg",
            "/images/rental/Maliqa/hall.jpg",
            "/images/rental/Maliqa/kamar4.jpg",
            "/images/rental/Maliqa/kitchen.jpg",
            "/images/rental/Maliqa/tangga.jpg",
            "/images/rental/Maliqa/teras.jpg",
            "/images/rental/Maliqa/toilet.jpg",
        ],
        roomVariant: {
            basic: {
                heroImage: "/images/rental/Maliqa/basic.jpeg",
                price: 1500000,
                images: [],
            },
            vip: {
                heroImage: "/images/rental/Maliqa/vip1.jpeg",
                price: 1650000,
                images: [
                    "/images/rental/Maliqa/vip2.jpeg",
                ],
            },
        },
    },
    "dajo-sawo-jajar": {
        name: "Dajo Sawo Jajar",
        address: "",
        havevip: false,
        overview: "",
        facility: "",
        location: "Jl. Danau jonge H7D no 21 sawojajar malang",
        googleMapURL: "https://maps.app.goo.gl/AuWFXK7vvBwXKpWL8",
        iframeSrc:
            "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3951.241290852281!2d112.66920252079242!3d-7.973995966552472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTgnMjYuNiJTIDExMsKwNDAnMDkuNiJF!5e0!3m2!1sid!2sid!4v1749054208078!5m2!1sid!2sid",
        roomVariant: {
            basic: {
                heroImage: "/images/rental/Dajo Sawo Jajar/dajo-hero.jpeg",
                price: 1800000,
                images: [
                    "/images/rental/Dajo Sawo Jajar/dajo-11.jpeg",
                    "/images/rental/Dajo Sawo Jajar/dajo-1.jpeg",
                    "/images/rental/Dajo Sawo Jajar/dajo-2.jpeg",
                    "/images/rental/Dajo Sawo Jajar/dajo-3.jpeg",
                    "/images/rental/Dajo Sawo Jajar/dajo-4.jpeg",
                    "/images/rental/Dajo Sawo Jajar/dajo-5.jpeg",
                    "/images/rental/Dajo Sawo Jajar/dajo-8.jpeg",
                    "/images/rental/Dajo Sawo Jajar/dajo-9.jpeg",
                ],
            },
        },
    },
    devy: {
        name: "Devy",
        address: "",
        havevip: false,
        overview: "",
        facility: "",
        location: "Candi Mendut barat blok D no 1A",
        googleMapURL: "https://maps.app.goo.gl/EEVCAA18jZJLDNtVA",
        iframeSrc:
            "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3951.5174366755564!2d112.59257932264455!3d-7.945358604465644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTYnNDMuOSJTIDExMsKwMzUnMzMuNSJF!5e0!3m2!1sid!2sid!4v1749054615858!5m2!1sid!2sid",
        roomVariant: {
            basic: {
                heroImage: "/images/rental/Devy/devy-hero.jpeg",
                price: 1800000,
                images: [
                    "/images/rental/Devy/devy-1.jpeg",
                    "/images/rental/Devy/devy-11.jpeg",
                    "/images/rental/Devy/devy-12.jpeg",
                    "/images/rental/Devy/devy-13.jpeg",
                    "/images/rental/Devy/devy-14.jpeg",
                    "/images/rental/Devy/devy-15.jpeg",
                    "/images/rental/Devy/devy-16.jpeg",
                    "/images/rental/Devy/devy-17.jpeg",
                    "/images/rental/Devy/devy-18.jpeg",
                    "/images/rental/Devy/devy-19.jpeg",
                    "/images/rental/Devy/devy-2.jpeg",
                    "/images/rental/Devy/devy-3.jpeg",
                    "/images/rental/Devy/devy-4.jpeg",
                    "/images/rental/Devy/devy-5.jpeg",
                    "/images/rental/Devy/devy-6.jpeg",
                    "/images/rental/Devy/devy-7.jpeg",
                    "/images/rental/Devy/devy-8.jpeg",
                    "/images/rental/Devy/devy-9.jpeg",
                ],
            },
        },
    },
    "dikost-putra": {
        name: "Dikost Putra",
        address: "",
        havevip: false,
        overview: "",
        facility: "",
        location: "Jl. Graha Agung Tectona no.17",
        googleMapURL: "https://maps.app.goo.gl/9Rc5qEQEJcMyLgPWA",
        iframeSrc:
            "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3951.5159024562663!2d112.59006877500663!3d-7.94551799207878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTYnNDMuOSJTIDExMsKwMzUnMzMuNSJF!5e0!3m2!1sid!2sid!4v1748920578716!5m2!1sid!2sid",
        roomVariant: {
            basic: {
                heroImage: "/images/rental/Dikost Putra/dikost-putra-23.jpeg",
                price: 1400000,
                images: [
                    "/images/rental/Dikost Putra/dikost-putra-1.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-10.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-11.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-12.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-13.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-14.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-15.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-16.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-17.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-18.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-19.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-2.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-20.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-21.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-22.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-24.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-25.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-26.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-3.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-4.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-5.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-6.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-7.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-8.jpeg",
                    "/images/rental/Dikost Putra/dikost-putra-9.jpeg",
                ],
            },
        },
    },
    "griya-shereen-and-zeleeka": {
        name: "Griya Shereen & Zeleeka",
        address: "",
        havevip: false,
        overview: "",
        facility: "",
        location: "Jalan Bunga Kaktus No.9",
        googleMapURL:
            "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3951.4977335249077!2d112.61875537500671!3d-7.947405292076915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTYnNTAuNyJTIDExMsKwMzcnMTYuOCJF!5e0!3m2!1sid!2sid!4v1748915548397!5m2!1sid!2sid",
        iframeSrc:
            "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3951.4971196867846!2d112.62136248216918!3d-7.947469046811588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTYnNTAuNyJTIDExMsKwMzcnMTYuOCJF!5e0!3m2!1sid!2sid!4v1749053708636!5m2!1sid!2sid",
        roomVariant: {
            basic: {
                heroImage:
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-7.jpeg",
                price: 1600000,
                images: [
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-1.jpeg",
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-10.jpeg",
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-11.jpeg",
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-12.jpeg",
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-13.jpeg",
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-14.jpeg",
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-15.jpeg",
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-16.jpeg",
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-17.jpeg",
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-18.jpeg",
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-19.jpeg",
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-2.jpeg",
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-20.jpeg",
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-21.jpeg",
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-22.jpeg",
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-23.jpeg",
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-24.jpeg",
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-3.jpeg",
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-4.jpeg",
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-5.jpeg",
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-6.jpeg",
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-8.jpeg",
                    "/images/rental/Griya Shereen & Zeleeka/shereen-zeleeka-9.jpeg",
                ],
            },
        },
    },
    kharisyah: {
        name: "Kharisyah",
        address: "",
        havevip: true,
        overview: "",
        facility: "",
        location: "Jalan Candi Mendut Selatan III No.18B",
        googleMapURL: "https://maps.app.goo.gl/8eGQJnBbjU1PckLx8",
        generalImages: [
            "/images/rental/Kharisyah/kharisyah-14.jpeg",
            "/images/rental/Kharisyah/kharisyah-1.jpeg",
            "/images/rental/Kharisyah/kharisyah-10.jpeg",
            "/images/rental/Kharisyah/kharisyah-11.jpeg",
            "/images/rental/Kharisyah/kharisyah-12.jpeg",
            "/images/rental/Kharisyah/kharisyah-13.jpeg",
            "/images/rental/Kharisyah/kharisyah-15.jpeg",
            "/images/rental/Kharisyah/kharisyah-2.jpeg",
            "/images/rental/Kharisyah/kharisyah-3.jpeg",
            "/images/rental/Kharisyah/kharisyah-4.jpeg",
            "/images/rental/Kharisyah/kharisyah-5.jpeg",
            "/images/rental/Kharisyah/kharisyah-6.jpeg",
            "/images/rental/Kharisyah/kharisyah-7.jpeg",
            "/images/rental/Kharisyah/kharisyah-8.jpeg",
            "/images/rental/Kharisyah/kharisyah-9.jpeg",
        ],
        iframeSrc:
            "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3951.5224881524264!2d112.63181687500654!3d-7.944833792079409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTYnNDEuNCJTIDExMsKwMzgnMDMuOCJF!5e0!3m2!1sid!2sid!4v1748915635702!5m2!1sid!2sid",
        roomVariant: {
            basic: {
                heroImage: "/images/rental/Kharisyah/basic.jpeg",
                price: 1500000,
                images: [
                ],
            },
            vip: {
                heroImage: "/images/rental/Kharisyah/vip1.jpeg",
                price: 1650000,
                images: [
                    "/images/rental/Kharisyah/vip2.jpeg",
                ],
            },
        },
    },
    khayyara: {
        name: "Khayyara",
        address: "",
        havevip: true,
        overview: "",
        facility: "",
        location: "Jalan Candi Mendut Barat VI B-14",
        googleMapURL: "https://maps.app.goo.gl/7rBXSA6QEgYSi3ur7",
        iframeSrc:
            "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3951.5715945471466!2d112.62495037500653!3d-7.939730192084384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTYnMjMuMCJTIDExMsKwMzcnMzkuMSJF!5e0!3m2!1sid!2sid!4v1748915675938!5m2!1sid!2sid",
        generalImages: [
            "/images/rental/Khayyara/khayyara-8.jpeg",
            "/images/rental/Khayyara/khayyara-1.jpeg",
            "/images/rental/Khayyara/khayyara-10.jpeg",
            "/images/rental/Khayyara/khayyara-11.jpeg",
            "/images/rental/Khayyara/khayyara-2.jpeg",
            "/images/rental/Khayyara/khayyara-3.jpeg",
            "/images/rental/Khayyara/khayyara-4.jpeg",
            "/images/rental/Khayyara/khayyara-5.jpeg",
            "/images/rental/Khayyara/khayyara-6.jpeg",
            "/images/rental/Khayyara/khayyara-7.jpeg",
            "/images/rental/Khayyara/khayyara-9.jpeg",
        ],
        roomVariant: {
            basic: {
                heroImage: "/images/rental/Khayyara/basic.jpeg",
                price: 1800000,
                images: [
                ],
            },
            vip: {
                heroImage: "/images/rental/Khayyara/vip.jpeg",
                price: 2000000,
                images: [],
            },
        },
    },
    lala: {
        name: "Lala",
        address: "",
        havevip: true,
        overview: "",
        facility: "",
        location: "Jalan Bendungan Sempor No.17C",
        googleMapURL: "https://maps.app.goo.gl/r8JCaCS6CWVk88Rw8",
        iframeSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5973.454719826431!2d112.61206091595163!3d-7.959769821682756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7883003bd78171%3A0xc52d4acceef5374d!2sLala%20Kost!5e0!3m2!1sid!2sid!4v1751386720631!5m2!1sid!2sid",
        generalImages: [
            "/images/rental/Lala/lala-12.jpeg",
            "/images/rental/Lala/lala-1.jpeg",
            "/images/rental/Lala/lala-10.jpeg",
            "/images/rental/Lala/lala-11.jpeg",
            "/images/rental/Lala/lala-13.jpeg",
            "/images/rental/Lala/lala-14.jpeg",
            "/images/rental/Lala/lala-15.jpeg",
            "/images/rental/Lala/lala-16.jpeg",
            "/images/rental/Lala/lala-17.jpeg",
            "/images/rental/Lala/lala-2.jpeg",
            "/images/rental/Lala/lala-3.jpeg",
            "/images/rental/Lala/lala-4.jpeg",
            "/images/rental/Lala/lala-5.jpeg",
            "/images/rental/Lala/lala-6.jpeg",
            "/images/rental/Lala/lala-7.jpeg",
            "/images/rental/Lala/lala-8.jpeg",
            "/images/rental/Lala/lala-9.jpeg",
        ],
        roomVariant: {
            basic: {
                heroImage: "/images/rental/Lala/basic.jpeg",
                price: 2000000,
                images: [
                ],
            },
            vip: {
                heroImage: "/images/rental/Lala/vip1.jpeg",
                price: 2200000,
                images: [
                    "/images/rental/Lala/vip2.jpeg"
                ],
            },
        },
    },
    "look-house": {
        name: "Look House",
        address: "",
        havevip: false,
        overview: "",
        facility: "",
        location: "Jalan Candi Mendut Barat A42",
        googleMapURL: "https://maps.app.goo.gl/BH3HVSxse61EL8nz7",
        iframeSrc:
            "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3951.569553401927!2d112.62440107500663!3d-7.939942392084146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTYnMjMuOCJTIDExMsKwMzcnMzcuMSJF!5e0!3m2!1sid!2sid!4v1748916128036!5m2!1sid!2sid",
        roomVariant: {
            basic: {
                heroImage: "/images/rental/Look House/look-house-13.jpeg",
                price: 1800000,
                images: [
                    "/images/rental/Look House/look-house-1.jpeg",
                    "/images/rental/Look House/look-house-10.jpeg",
                    "/images/rental/Look House/look-house-11.jpeg",
                    "/images/rental/Look House/look-house-12.jpeg",
                    "/images/rental/Look House/look-house-14.jpeg",
                    "/images/rental/Look House/look-house-15.jpeg",
                    "/images/rental/Look House/look-house-16.jpeg",
                    "/images/rental/Look House/look-house-17.jpeg",
                    "/images/rental/Look House/look-house-18.jpeg",
                    "/images/rental/Look House/look-house-19.jpeg",
                    "/images/rental/Look House/look-house-2.jpeg",
                    "/images/rental/Look House/look-house-20.jpeg",
                    "/images/rental/Look House/look-house-21.jpeg",
                    "/images/rental/Look House/look-house-22.jpeg",
                    "/images/rental/Look House/look-house-23.jpeg",
                    "/images/rental/Look House/look-house-24.jpeg",
                    "/images/rental/Look House/look-house-25.jpeg",
                    "/images/rental/Look House/look-house-26.jpeg",
                    "/images/rental/Look House/look-house-27.jpeg",
                    "/images/rental/Look House/look-house-28.jpeg",
                    "/images/rental/Look House/look-house-29.jpeg",
                    "/images/rental/Look House/look-house-3.jpeg",
                    "/images/rental/Look House/look-house-30.jpeg",
                    "/images/rental/Look House/look-house-31.jpeg",
                    "/images/rental/Look House/look-house-32.jpeg",
                    "/images/rental/Look House/look-house-33.jpeg",
                    "/images/rental/Look House/look-house-34.jpeg",
                    "/images/rental/Look House/look-house-35.jpeg",
                    "/images/rental/Look House/look-house-36.jpeg",
                    "/images/rental/Look House/look-house-4.jpeg",
                    "/images/rental/Look House/look-house-5.jpeg",
                    "/images/rental/Look House/look-house-6.jpeg",
                    "/images/rental/Look House/look-house-7.jpeg",
                    "/images/rental/Look House/look-house-8.jpeg",
                    "/images/rental/Look House/look-house-9.jpeg",
                ],
            },
        },
    },
    "putra-candi-agung": {
        name: "Putra Candi Agung I",
        address: "",
        havevip: false,
        overview: "",
        facility: "",
        location: "JL. Candi Agung I No.29",
        googleMapURL: "https://maps.app.goo.gl/ekn98cF7CiakF1VT6",
        iframeSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.540949469309!2d112.63564629999999!3d-7.9429155000000025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629c24fb1d3c1%3A0x62baa317a6859783!2sJl.%20Candi%20Agung%20I%20No.29%2C%20Mojolangu%2C%20Kec.%20Lowokwaru%2C%20Kota%20Malang%2C%20Jawa%20Timur%2065142!5e0!3m2!1sid!2sid!4v1748916403513!5m2!1sid!2sid",
        roomVariant: {
            basic: {
                heroImage: "/images/rental/Putra Candi Agung/putra-candi-agung-11.jpg",
                price: 650000,
                images: [
                    "/images/rental/Putra Candi Agung/putra-candi-agung-10.jpg",
                    "/images/rental/Putra Candi Agung/putra-candi-agung-1.jpg",
                    "/images/rental/Putra Candi Agung/putra-candi-agung-12.jpg",
                    "/images/rental/Putra Candi Agung/putra-candi-agung-13.jpg",
                    "/images/rental/Putra Candi Agung/putra-candi-agung-14.jpg",
                    "/images/rental/Putra Candi Agung/putra-candi-agung-15.jpg",
                    "/images/rental/Putra Candi Agung/putra-candi-agung-16.jpg",
                    "/images/rental/Putra Candi Agung/putra-candi-agung-2.jpeg",
                    "/images/rental/Putra Candi Agung/putra-candi-agung-3.jpg",
                    "/images/rental/Putra Candi Agung/putra-candi-agung-4.jpeg",
                    "/images/rental/Putra Candi Agung/putra-candi-agung-5.jpg",
                    "/images/rental/Putra Candi Agung/putra-candi-agung-6.jpg",
                    "/images/rental/Putra Candi Agung/putra-candi-agung-7.jpg",
                    "/images/rental/Putra Candi Agung/putra-candi-agung-8.jpg",
                    "/images/rental/Putra Candi Agung/putra-candi-agung-9.jpg",
                ],
            },
        },
    },
    "calloway": {
        name: "Calloway",
        address: "",
        havevip: true,
        overview: "",
        facility: "",
        location: "JL. Candi Mendut Barat Blok C No.16B",
        googleMapURL: "https://maps.app.goo.gl/ZAnDzQGyk6z2Xku58",
        iframeSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d651.0166057786403!2d112.62696707184274!3d-7.939276831585043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629e72244e43b%3A0xb5075acaf8ed92ec!2sJl.%20Candi%20Mendut%20Bar.%20Bl.%20C%20No.16%2C%20Mojolangu%2C%20Kec.%20Lowokwaru%2C%20Kota%20Malang%2C%20Jawa%20Timur%2065141!5e0!3m2!1sid!2sid!4v1751385628019!5m2!1sid!2sid",
        generalImages: [
            "/images/rental/Calloway/calloway-1.jpeg",
            "/images/rental/Calloway/calloway-2.jpeg",
            "/images/rental/Calloway/calloway-3.jpeg",
            "/images/rental/Calloway/calloway-4.jpeg",
            "/images/rental/Calloway/calloway-5.jpeg",
            "/images/rental/Calloway/calloway-9.jpeg",
            "/images/rental/Calloway/calloway-10.jpeg",
            "/images/rental/Calloway/calloway-11.jpeg",
            "/images/rental/Calloway/calloway-12.jpeg",
            "/images/rental/Calloway/calloway-13.jpeg",
            "/images/rental/Calloway/calloway-14.jpeg",
            "/images/rental/Calloway/calloway-15.jpeg",
            "/images/rental/Calloway/calloway-16.jpeg",
            "/images/rental/Calloway/calloway-17.jpeg",
            "/images/rental/Calloway/calloway-18.jpeg",
            "/images/rental/Calloway/calloway-19.jpeg",
        ],
        roomVariant: {
            basic: {
                heroImage: "/images/rental/Calloway/basic.jpeg",
                price: 1800000,
                images: [
                ],
            },
            medium: {
                heroImage: "/images/rental/Calloway/medium.jpeg",
                price: 2200000,
                images: [
                ],
            },
            vip: {
                heroImage: "/images/rental/Calloway/vip.jpeg",
                price: 2500000,
                images: [],
            },
        },
    },
    "griya-kendedes": {
        name: "Griya Kendedes",
        address: "",
        havevip: false,
        overview: "",
        facility: "",
        location: "JL. Simpang Coklat No.5",
        googleMapURL: "https://maps.app.goo.gl/KBXrZ4EXuusGuKJH8",
        iframeSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.5233948206283!2d112.61779167500664!3d-7.944739592079523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6293ef72da3b5%3A0x9ef9285aa274c715!2sGriya%20Kendedes%20Guest%20House%20%26%20Kos!5e0!3m2!1sid!2sid!4v1751386000672!5m2!1sid!2sid",
        roomVariant: {
            basic: {
                heroImage: "/images/rental/Griya Kendedes/griya-kendedes-3.jpeg",
                price: 3000000,
                images: [
                    "/images/rental/Griya Kendedes/griya-kendedes-1.jpeg",
                    "/images/rental/Griya Kendedes/griya-kendedes-2.jpeg",
                    "/images/rental/Griya Kendedes/griya-kendedes-4.jpeg",
                    "/images/rental/Griya Kendedes/griya-kendedes-5.jpeg",
                    "/images/rental/Griya Kendedes/griya-kendedes-6.jpeg",
                    "/images/rental/Griya Kendedes/griya-kendedes-7.jpeg",
                    "/images/rental/Griya Kendedes/griya-kendedes-8.jpeg",
                    "/images/rental/Griya Kendedes/griya-kendedes-9.jpeg",
                ],
            },
        },
    }
};


// Fungsi upload ke Strapi
async function uploadRentalPlace(key, data) {
    try {
        // Convert roomVariant object ke array
        const roomVariants = Object.entries(data.roomVariant || {}).map(([type, variant]) => ({
            type: type,
            price: variant.price,
        }));

        const payload = {
            data: {  // Wrap everything inside "data"
                name: data.name,
                location: data.location,
                havevip: data.havevip,
                overview: data.overview,
                facility: data.facility,
                googleMapURL: data.googleMapURL,
                iframeSrc: data.iframeSrc,
                slug: key,
                roomVariant: roomVariants
            }
        };

        console.log(`🏠 Uploading ${data.name}...`);
        console.log(payload)

        const response = await fetch(`${STRAPI_URL}/api/rental-places`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_TOKEN}`
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`HTTP ${response.status}: ${JSON.stringify(errorData)}`);
        }

        const result = await response.json();
        console.log(`✅ Success: ${data.name} (ID: ${result.data.id})`);
        return result;

    } catch (error) {
        console.error(`❌ Failed: ${data.name} - ${error.message}`);
        throw error;
    }
}

// Upload semua data
async function uploadAll() {
    console.log('🚀 Starting upload...');
    console.log(`📦 Total: ${Object.keys(rentalPlaceDetails).length} rental places`);

    let success = 0;
    let failed = 0;

    // Test koneksi dulu
    try {
        console.log('🔗 Testing connection...');
        const testResponse = await fetch(`${STRAPI_URL}/api/rental-places`, {
            headers: { 'Authorization': `Bearer ${API_TOKEN}` }
        });

        if (testResponse.ok) {
            console.log('✅ Connection OK');
        } else {
            console.error('❌ Connection failed:', testResponse.status);
            return;
        }
    } catch (error) {
        console.error('❌ Connection error:', error.message);
        return;
    }

    // Upload satu per satu
    const skipNames = ["Dajo Sawo Jajar", "DK Living", "Griya Artha Prima", "Maliqa"];

    for (const [key, data] of Object.entries(rentalPlaceDetails)) {
        try {
            if (skipNames.includes(data.name)) {
                console.log(`Skipped ${data.name}`);
                continue;
            }
            await uploadRentalPlace(key, data);
            success++;

            // Delay biar ga spam
            await new Promise(resolve => setTimeout(resolve, 1000));

        } catch (error) {
            failed++;
        }
    }

    console.log('\n📊 Summary:');
    console.log(`✅ Success: ${success}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`📝 Total: ${success + failed}`);
}

// Jalankan script
uploadAll().catch(error => {
    console.error('💥 Fatal error:', error);
    process.exit(1);
});