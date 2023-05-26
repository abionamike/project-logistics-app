import React from 'react'
import { Modal } from 'react-native'
import RoundButton from '../RoundButton';
import { StyledFlatList } from './styles';
import FlatListHeader from './components/FlatListHeader';
import { useDestinationModal } from '@/hooks/useDestinationModal';

interface DesinationModalProps {
    visible: boolean;
    closeModal: () => void;
}

const DesinationModal = ({ visible, closeModal }: DesinationModalProps) => {
    const { models, operations } = useDestinationModal();
    
    const renderFlatListItem = () => {
        return null;
    }
    
    return (
        <Modal onRequestClose={closeModal} visible={visible} animationType='fade'>
            <StyledFlatList 
                data={[]} 
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