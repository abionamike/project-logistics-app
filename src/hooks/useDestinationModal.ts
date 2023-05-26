import { useState } from "react"

export const useDestinationModal = () => {
    const [destinationInputValue, setDestinationInputValue] = useState("");
    
    const handleDestinationInputTextChange = (value: string) => {
        console.log(value)
        
        setDestinationInputValue(value);
    }
    
    return {
        models: { destinationInputValue },
        operations: { handleDestinationInputTextChange }
    }
}