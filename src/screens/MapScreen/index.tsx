import React from 'react'
import { StyledMapView } from './styles'
import useMapScreen from '@/hooks/useMapScreen'

const MapScreen = () => {
    const { models, operations } = useMapScreen();

    return (
        <StyledMapView 
            ref={models.mapRef}
            showsUserLocation 
            onUserLocationChange={operations.handleUserLocationChange} 
            showsMyLocationButton={false}
            showsCompass={false}

        />
    )
}

export default MapScreen