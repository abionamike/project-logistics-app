import { RideItem } from "@/src/types/rideItems"
import { useState } from "react"
import { ridesData } from "./mockData"

export const useChooseRideBottomSheet = () => {
    const [selectedRide, setSelectedRide] = useState<RideItem>(ridesData[0].data[0]);

    const handleRideItemPress = (item: RideItem) => {
        return () => {
            setSelectedRide(item);
        }
    }

    return {
        models: { selectedRide },
        operations: { handleRideItemPress }
    };
}