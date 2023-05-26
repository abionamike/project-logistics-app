import { useEffect, useRef, useState } from 'react'
import MapView, { UserLocationChangeEvent } from 'react-native-maps'

const LATITUDE_DELTA = 0.0022;
const LONGITUDE_DELTA = 0.005;

export const useMapScreen = () => {
    const mapRef = useRef<MapView>(null);
    const [userLocation, setUserLocation] = useState<UserLocationChangeEvent["nativeEvent"]["coordinate"]>();

    useEffect(() => {
        if(userLocation) {
            mapRef.current?.animateToRegion({
                longitude: userLocation.longitude,
                latitude: userLocation.latitude,
                longitudeDelta: LONGITUDE_DELTA,
                latitudeDelta: LATITUDE_DELTA,
            })
        }
    }, [userLocation]);

    const handleUserLocationChange = ({ nativeEvent: { coordinate } }: UserLocationChangeEvent) => {
        setUserLocation(coordinate)
    }

    return {
        models: {
            mapRef
        },
        operations: {
            handleUserLocationChange,
        },
    }
}

export default useMapScreen