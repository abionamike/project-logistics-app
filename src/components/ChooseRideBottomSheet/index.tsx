import React from 'react'
import BottomSheet, { BottomSheetSectionList } from '@gorhom/bottom-sheet'
import { rideSheetSnapPoints } from '@/constants/bottomSheetSnapPoints';
import { ridesData } from './mockData';
import ChooseRideItem from './components/ChooseRideItem';
import { SectionListData, SectionListRenderItem } from 'react-native';
import { RideItem } from '@/src/types/rideItems';
import { calculateRidePrice } from '@/utils/calculateRidePrice';
import type { MapDirectionsResponse } from 'react-native-maps-directions';
import { useChooseRideBottomSheet } from './useChooseRideBottomSheet';
import Header from './components/Header';
import SectionHeader from './components/SectionHeader';
import Footer from './components/Footer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ChooseRideBottomSheetProps {
    onChange: (index: number) => void;
    mapDirections?: MapDirectionsResponse
}

const ChooseRideBottomSheet = ({ onChange, mapDirections }: ChooseRideBottomSheetProps) => {
    const insets = useSafeAreaInsets();
    const { models, operations } = useChooseRideBottomSheet({ onChange });

    const renderSectionHeader = ({ section }: { section: SectionListData<RideItem> }) => {
        return models.isBottomSheetExpanded ? (
            <SectionHeader title={section.title} />
        ) : null;
    }
    
    const renderSectionItem: SectionListRenderItem<RideItem> = ({ item }) => {
        return (
            <ChooseRideItem 
                key={item.id} 
                variant={models.isBottomSheetExpanded ? "expanded" : "compact"} 
                onPress={operations.handleRideItemPress(item)} 
                title={item.type}
                price={calculateRidePrice(item.price, mapDirections)}
                eta={item.eta}
                description={item.description}
                selected={item.id === models.selectedRide.id}
                maxPassengers={item.maxPassengers}
            />
        );
    }
    
    return (
        <>
            <BottomSheet 
                index={1} 
                onChange={operations.handleBottomSheetChange} 
                snapPoints={rideSheetSnapPoints(insets)}
            >
                <BottomSheetSectionList 
                    ListHeaderComponent={
                        <Header />
                    }
                    renderItem={renderSectionItem}
                    sections={ridesData} 
                    renderSectionHeader={renderSectionHeader}
                    stickySectionHeadersEnabled={false}
                />
            </BottomSheet>
            <Footer 
                selectedRide={models.selectedRide} 
                offset={models.footerOffset} 
            />
        </>
    )
}

export default ChooseRideBottomSheet