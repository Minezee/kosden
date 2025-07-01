export type RoomVariant = {
    heroImage: string;
    price: number;
    images: string[];
};

export type RentalPlace = {
    name: string;
    address: string;
    havevip: boolean;
    overview: string;
    facility: string;
    location: string;
    googleMapURL: string;
    iframeSrc: string;
    generalImages?: string[];
    roomVariant: {
        basic: RoomVariant;
    } & Partial<{
        medium: RoomVariant;
        vip: RoomVariant;
    }>;
};

export type RentalPlaceDetailsType = Record<string, RentalPlace>;
