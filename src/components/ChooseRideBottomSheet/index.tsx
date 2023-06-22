import React from 'react'
import BottomSheet, { BottomSheetSectionList } from '@gorhom/bottom-sheet'
import { rideSheetSnapPoints } from '@/constants/bottomSheetSnapPoints';
import { ridesData } from './mockData';
import ChooseRideItem from './components/ChooseRideItem';
import { SectionListRenderItem } from 'react-native';
import { RideItem } from '@/src/types/rideItems';
import { calculateRidePrice } from '@/utils/calculateRidePrice';
import type { MapDirectionsResponse } from 'react-native-maps-directions';

interface ChooseRideBottomSheetProps {
    onChange: (index: number) => void;
    mapDirections?: MapDirectionsResponse
}

const ChooseRideBottomSheet = ({ onChange, mapDirections }: ChooseRideBottomSheetProps) => {
    const renderSectionItem: SectionListRenderItem<RideItem> = ({ item }) => {
        return (
            <ChooseRideItem 
                key={item.id} 
                variant='compact' 
                onPress={() => {}} 
                title={item.type}
                price={calculateRidePrice(item.price, mapDirections)}
                eta={item.eta}
                description={item.description}
                selected={item.id === '1'}
                maxPassengers={item.maxPassengers}
            />
        );
    }
    
    return (
        <BottomSheet index={1} onChange={onChange} snapPoints={rideSheetSnapPoints}>
            <BottomSheetSectionList 
                renderItem={renderSectionItem}
                sections={ridesData} 
            />
        </BottomSheet>
    )
}

export default ChooseRideBottomSheet