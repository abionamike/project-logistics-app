import React from 'react'
import { Container, StyledMapView } from './styles'
import useMapScreen from '@/hooks/useMapScreen'
import RoundButton from '@/components/RoundButton';
import MapSearchBar from '@/components/MapSearchBar';
import DesinationModal from '@/components/DestinationModal';

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
            <MapSearchBar onPress={operations.handleMapSearchBarPress} />
            <DesinationModal 
                visible={models.modalVisible} 
                closeModal={operations.closeDestinationModal} 
            />
        </Container>
    )
}

export default MapScreen