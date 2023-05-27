import { useCallback, useEffect, useRef, useState } from 'react'
import MapView, { LatLng, UserLocationChangeEvent } from 'react-native-maps'
import { useUserLocationStateContext } from '../context/UserLocationStateContext';
import { MapDirectionsResponse } from 'react-native-maps-directions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { scale } from 'react-native-size-matters';

const LATITUDE_DELTA = 0.0022;
const LONGITUDE_DELTA = 0.005;

export const useMapScreen = () => {
    const { userLocation, setUserLocation } = useUserLocationStateContext();
    const insets = useSafeAreaInsets();

    const mapRef = useRef<MapView>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [mapMarkers, setMapMarkers] = useState<LatLng[]>([]);
    const [mapDirections, setMapDirections] = useState<MapDirectionsResponse>();

    const isRouteVisible = mapMarkers.length === 2;

    useEffect(() => {
        if(mapDirections && mapDirections.coordinates) {
            mapRef.current?.fitToCoordinates(mapDirections.coordinates, {
                edgePadding: {
                    top: insets.top + scale(15),
                    bottom: scale(15),
                    left: scale(15),
                    right: scale(15)
                }
            });
        }
    }, [mapDirections?.coordinates, insets.top]);

    const centerTouserLocation = useCallback(() => {
        if(userLocation) {
            mapRef.current?.animateToRegion({
                longitude: userLocation.coords.longitude,
                latitude: userLocation.coords.latitude,
                longitudeDelta: LONGITUDE_DELTA,
                latitudeDelta: LATITUDE_DELTA,
            })
        }
    }, [userLocation]);

    useEffect(() => {
        centerTouserLocation();
    }, [centerTouserLocation]);

    const closeDestinationModal = () => {
        setModalVisible(false);
    }

    const handleUserLocationChange = ({ nativeEvent: { coordinate } }: UserLocationChangeEvent) => {
        if(coordinate && !modalVisible && !isRouteVisible) {
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

    const handlePlaceItemPress = (coords: LatLng) => {
        return () => {
            if(userLocation) {
                setMapMarkers([userLocation?.coords, coords]);
                setModalVisible(false);
            }
        }
    }

    const handleMapDirectionsReady = (routeInfo: MapDirectionsResponse) => {
        setMapDirections(routeInfo);
    }

    const handleRoundButtonPress = () => {
        if(isRouteVisible) {
            setMapMarkers([]);
            centerTouserLocation();
        }
    }

    return {
        models: {
            mapRef,
            modalVisible,
            mapMarkers,
            isRouteVisible
        },
        operations: {
            handleUserLocationChange,
            handleMapSearchBarPress,
            closeDestinationModal,
            handlePlaceItemPress,
            handleMapDirectionsReady,
            handleRoundButtonPress
        },
    }
}

export default useMapScreen