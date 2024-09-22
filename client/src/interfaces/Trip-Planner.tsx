export interface Parks {}

export interface Trip {
    id: number;
    userId: number;
    name: string;
    city: string;
    zip: string;
    address: string;
    transit: string;
    difficulty: number;
}

export interface Trail {
    id: number;
    name: string;
    city: string;
    zip: number;
    crossstreets: string;
    address: string;
    transit: string;
    lat: number;
    lng: number;
    desc: string;
    lighting: string;
    difficulty: number;
    surface: string;
    parking: string;
    facilities: string;
    hours: number | string;
    loopcount: string;
    satImgURL: string;
    largeImgURL: string;
    thumbURL: string;
    attractions: [string];
    published: boolean;
    rating: number;
    ratings: number;
    ModifiedTime: string;
    reviews: number;
    distance: number;
    url: string;
}
