import React from 'react'
import { Modal } from 'react-native'
import RoundButton from '../RoundButton';
import { StyledFlatList } from './styles';
import FlatListHeader from './components/FlatListHeader';
import { useDestinationModal } from '@/hooks/useDestinationModal';
import PlaceItem from '../PlaceItem';
import { TextSearchItem } from '@/src/types/TextSearchItem';

interface DesinationModalProps {
    visible: boolean;
    closeModal: () => void;
}

const DesinationModal = ({ visible, closeModal }: DesinationModalProps) => {
    const { models, operations } = useDestinationModal();
    
    const renderFlatListItem = ({ item }: { item: TextSearchItem }) => {
        return (
            <PlaceItem 
                name={item.name}
                iconUrl={item.icon}
                address={item.formatted_address}
                onPress={() => {}}
            />
        );
    }
    
    return (
        <Modal onRequestClose={closeModal} visible={visible} animationType='fade'>
            <StyledFlatList 
                data={models.textSearchQueryResponseData} 
                renderItem={renderFlatListItem} 
                ListHeaderComponent={
                    <FlatListHeader 
                        destinationValue={models.destinationInputValue} 
                        onDestinationTextChange={operations.handleDestinationInputTextChange}
                    />
                }
            />
            <RoundButton 
                icon='arrow-back-outline' 
                onPress={closeModal}
            />
        </Modal>
    )
}

export default DesinationModal