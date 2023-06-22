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
import ChooseRideBottomSheet from '@/components/ChooseRideBottomSheet';

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
                {/* AIzaSyDNV5RAicLlVgHPF3OSLfNE78_F1dD8poo */}
                <MapViewDirections 
                    origin={models.mapMarkers[0]} 
                    destination={models.mapMarkers[1]}
                    apikey='AIzaSyDNV5RAicLlVgHPF3OSLfNE78_F1dD8poo'
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
            {models.isRouteVisible ? <ChooseRideBottomSheet onChange={operations.handleBottomSheetChange} mapDirections={models.mapDirections} /> : null}
        </Container> 
    )
}

export default MapScreen