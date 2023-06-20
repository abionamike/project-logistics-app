import React from 'react'
import { Container, StyledMapView } from './styles'
import useMapScreen from '@/hooks/useMapScreen'
import RoundButton from '@/components/RoundButton';
import MapSearchBar from '@/components/MapSearchBar';
import DesinationModal from '@/components/DestinationModal';
import { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useTheme } from '@emotion/react';
import { scale } from 'react-native-size-matters';

const MapScreen = () => {
    const { models, operations } = useMapScreen();
    const theme = useTheme();

    const renderMapMarkers = () => {
        return models.mapMarkers.map((item, index) => (
            <Marker coordinate={item} key={index} />
        ))
    }

    return (
        <Container>
            <StyledMapView 
                ref={models.mapRef}
                showsUserLocation 
                onUserLocationChange={operations.handleUserLocationChange} 
                showsMyLocationButton={false}
                showsCompass={false}
            >
                {renderMapMarkers()}
                <MapViewDirections 
                    origin={models.mapMarkers[0]} 
                    destination={models.mapMarkers[1]}
                    apikey='AIzaSyAwYx76FgyMCWngLIUJyspK_p71Rtwh'
                    strokeColor={theme.colors.screens.mapScreen.directionsStroke}
                    strokeWidth={scale(5)}
                    onReady={operations.handleMapDirectionsReady}
                />
            </StyledMapView>
            {models.isRouteVisible || models.modalVisible ? null : (
                <MapSearchBar onPress={operations.handleMapSearchBarPress} />
            )}
            <RoundButton 
                onPress={operations.handleRoundButtonPress}
                icon={models.isRouteVisible ? 'arrow-back-outline' : 'ios-menu-outline'}
            />
            <DesinationModal 
                visible={models.modalVisible} 
                closeModal={operations.closeDestinationModal} 
                onPress={operations.handlePlaceItemPress}
            />
        </Container>
    )
}

export default MapScreen