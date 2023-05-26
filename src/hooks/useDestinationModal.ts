import { useState } from "react"
import { useTextSearchQuery } from "./useTextSearchQuery";
import { useDebounce } from "use-debounce"

export const useDestinationModal = () => {
    const [destinationInputValue, setDestinationInputValue] = useState("");
    const [debouncedDestinationInputValue] = useDebounce(destinationInputValue, 500);

    const { responseData } = useTextSearchQuery(debouncedDestinationInputValue);
    
    const handleDestinationInputTextChange = (value: string) => {
        setDestinationInputValue(value);
    }
    
    return {
        models: { destinationInputValue, textSearchQueryResponseData: responseData?.results || [] },
        operations: { handleDestinationInputTextChange }
    }
}