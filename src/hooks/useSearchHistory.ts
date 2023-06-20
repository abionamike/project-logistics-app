import { useEffect, useState } from "react"
import { getItemFromStorage, saveItemToStorage } from "../utils/storage";

export const useSearchHistory = (key: string) => {
    const [searchHistoryItems, setSearchHistoryItems] = useState<any[]>([]);

    useEffect(() => {
        (async () => {
            const item = await getItemFromStorage(key);

            if(item) {
                const previousSearches = JSON.parse(item);
                // restrict number of searched to 15
                previousSearches.slice(0, 14);
                setSearchHistoryItems(previousSearches);
            }
        })();
    }, [key]);

    const addItemToSearchHistory = (item: any) => {
        const filteredData = searchHistoryItems?.filter(searchItem => {
            return searchItem.place_id !== item.place_id;
        });

        setSearchHistoryItems([item, ...filteredData]);
        saveItemToStorage("places", JSON.stringify([item, ...filteredData]));
    }

    return {
        searchHistoryItems, 
        addItemToSearchHistory
    }
}