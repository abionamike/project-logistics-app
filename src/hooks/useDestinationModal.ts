import { useState } from "react"
import { useTextSearchQuery } from "./useTextSearchQuery";
import { useDebounce } from "use-debounce"
import { useSearchHistory } from "./useSearchHistory";
import { LatLng } from "react-native-maps";
import { TextSearchItem } from "../types/TextSearchItem";

type UseDestinationModal = {
    onPress: (coords: LatLng) => void; 
    closeModal: () => void;
}

export const useDestinationModal = ({ onPress, closeModal }: UseDestinationModal) => {
    const [destinationInputValue, setDestinationInputValue] = useState("");
    const [debouncedDestinationInputValue] = useDebounce(destinationInputValue, 500);

    const { searchHistoryItems, addItemToSearchHistory } = useSearchHistory("places", "place_id");

    const { responseData } = useTextSearchQuery(debouncedDestinationInputValue);
    
    const handleDestinationInputTextChange = (value: string) => {
        setDestinationInputValue(value);
    }

    const handlePlaceItemPress = (item: TextSearchItem) => {
        return () => {
            onPress({
                latitude: item.geometry.location.lat,
                longitude: item.geometry.location.lng
            });
    
            addItemToSearchHistory(item);
        }
    }

    const handleRoundButtonPress = () => {
        closeModal();
    }

    const handleModalDismiss = () => {
        setDestinationInputValue("");
    }
     
    return {
        models: { 
            destinationInputValue, 
            textSearchQueryResponseData: responseData?.results || searchHistoryItems 
        },
        operations: { 
            handleDestinationInputTextChange, 
            handlePlaceItemPress,
            handleRoundButtonPress,
            handleModalDismiss 
        }
    }
}