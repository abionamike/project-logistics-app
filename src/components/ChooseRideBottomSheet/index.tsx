import React from 'react'
import BottomSheet, { BottomSheetSectionList } from '@gorhom/bottom-sheet'
import { rideSheetSnapPoints } from '@/constants/bottomSheetSnapPoints';
import { ridesData } from './mockData';
import ChooseRideItem from './components/ChooseRideItem';
import { SectionListRenderItem } from 'react-native';
import { RideItem } from '@/src/types/rideItems';

interface ChooseRideBottomSheetProps {
    onChange: (index: number) => void;
}

const ChooseRideBottomSheet = ({ onChange }: ChooseRideBottomSheetProps) => {
    const renderSectionItem: SectionListRenderItem<RideItem> = ({ item }) => {
        console.log(item)
        return (
            <ChooseRideItem 
                key={item.id} 
                variant='compact' 
                onPress={() => {}} 
                title={item.type}
                price={"50"}
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