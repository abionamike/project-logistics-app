import { useEffect, useRef, useState } from 'react'
import MapView, { UserLocationChangeEvent } from 'react-native-maps'
import { useUserLocationStateContext } from '../context/UserLocationStateContext';

const LATITUDE_DELTA = 0.0022;
const LONGITUDE_DELTA = 0.005;

export const useMapScreen = () => {
    const { userLocation, setUserLocation } = useUserLocationStateContext();
    
    const mapRef = useRef<MapView>(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if(userLocation) {
            mapRef.current?.animateToRegion({
                longitude: userLocation.coords.longitude,
                latitude: userLocation.coords.latitude,
                longitudeDelta: LONGITUDE_DELTA,
                latitudeDelta: LATITUDE_DELTA,
            })
        }
    }, [userLocation]);

    const closeDestinationModal = () => {
        setModalVisible(false);
    }

    const handleUserLocationChange = ({ nativeEvent: { coordinate } }: UserLocationChangeEvent) => {
        if(coordinate) {
            setUserLocation({ 
                coords: {
                    latitude: coordinate.latitude,
                    longitude: coordinate.longitude
                }
            });
        }
    }

    const handleMapSearchBarPress = () => {
        setModalVisible(true);
    }

    return {
        models: {
            mapRef,
            modalVisible
        },
        operations: {
            handleUserLocationChange,
            handleMapSearchBarPress,
            closeDestinationModal
        },
    }
}

export default useMapScreen