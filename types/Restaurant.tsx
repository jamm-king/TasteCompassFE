export interface Restaurant {
    id: string;
    name: string;
    address: string;
    category?: string;
    phone?: string;
    businessDays?: string;
    hasWifi?: boolean;
    hasParking?: boolean;
    menus?: RestaurantMenu[];
    minPrice?: number;
    maxPrice?: number;
    taste?: string;
    mood?: string;
    thumbnailUrl?: string;
}

export interface RestaurantMenu {
    name: string;
    price: number;
}
