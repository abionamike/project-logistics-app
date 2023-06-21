import React from 'react'
import BottomSheet, { BottomSheetSectionList } from '@gorhom/bottom-sheet'
import { rideSheetSnapPoints } from '@/constants/bottomSheetSnapPoints';
import { ridesData } from './mockData';

interface ChooseRideBottomSheetProps {
    onChange: (index: number) => void;
}

const ChooseRideBottomSheet = ({ onChange }: ChooseRideBottomSheetProps) => {
    const renderSectionItem = () => {
        return null;
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