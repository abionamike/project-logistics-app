import type { MapDirectionsResponse } from "react-native-maps-directions";
import type { RideItemPrice } from "../types/rideItems";

export const calculateRidePrice = (
    price: RideItemPrice,
    routeInfo?: MapDirectionsResponse
) => {
    if(routeInfo) {
        const { distance, duration } = routeInfo;

        return `${price.currency}${(Math.round((price.perKm * distance + price.perMinute * duration) * 100)).toFixed(2)}`
    }

    return '';
}