import React from 'react'
import { Container, StyledMapView } from './styles'
import useMapScreen from '@/hooks/useMapScreen'
import RoundButton from '@/components/RoundButton';

const MapScreen = () => {
    const { models, operations } = useMapScreen();

    return (
        <Container>
            <StyledMapView 
                ref={models.mapRef}
                showsUserLocation 
                onUserLocationChange={operations.handleUserLocationChange} 
                showsMyLocationButton={false}
                showsCompass={false}
            />
            <RoundButton icon='ios-menu-outline' />
        </Container>
    )
}

export default MapScreen