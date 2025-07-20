export interface RentalDataType {
    id: number;
    documentId: string;
    name: string;
    havevip: boolean;
    overview?: string;
    facility?: string;
    location: string;
    googleMapURL: string;
    iframeSrc: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    generalImages?: StrapiImage[];
    roomVariant: RoomVariant[];
}

export interface RoomVariant {
    id: number;
    type: 'basic' | 'medium' | 'vip';
    price: number;
    heroImage: StrapiImage;
    images?: StrapiImage[] | null;
}

export interface StrapiImage {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        [key: string]: {
            ext: string;
            url: string;
            width?: number;
            height?: number;
            size?: number;
        };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata?: Record<string, any>;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}
