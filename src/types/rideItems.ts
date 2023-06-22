export type RideItemPrice = {
    perKm: number;
    perMinute: number;
    currency: string
}

export type RideItem = {
    name: string;
    description: string;
    type: string;
    eta: number;
    maxpassengers: number | null;
    id: string;
    price: RideItemPrice;
}