export type TextSearchItem = {
    formatted_address: string,
    geometry: {
        location: {
            lat: number,
            long: number,
        }
    },
    icon: string,
    name: string,
    place_id: string
}