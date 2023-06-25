import { Dimensions } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";

const { height } = Dimensions.get("screen");

export const rideSheetSnapPoints = (insets: EdgeInsets) => {
    return ['20%', '50%', '90%'];
};

export const mapRideSheetIndexToMapPadding = [
    height * 0.2, 
    height * 0.5, 
    height * 0.5
];