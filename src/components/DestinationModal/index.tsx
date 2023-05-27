import React from 'react'
import { Modal } from 'react-native'
import RoundButton from '../RoundButton';
import { StyledFlatList, useStyles } from './styles';
import FlatListHeader from './components/FlatListHeader';
import { useDestinationModal } from '@/hooks/useDestinationModal';
import PlaceItem from '../PlaceItem';
import { TextSearchItem } from '@/src/types/TextSearchItem';
import Spacer from '../common/Spacer';
import { scale } from 'react-native-size-matters';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LatLng } from 'react-native-maps';

interface DesinationModalProps {
    visible: boolean;
    closeModal: () => void;
    onPress: (coords: LatLng) => () => void
}

const ItemSeperatorComponent = () => <Spacer height={scale(17)} />

const DesinationModal = ({ visible, closeModal, onPress }: DesinationModalProps) => {
    const { models, operations } = useDestinationModal();
    const insets = useSafeAreaInsets();
    const styles = useStyles(insets);
    
    const renderFlatListItem = ({ item }: { item: TextSearchItem }) => {
        return (
            <PlaceItem 
                key={item.place_id}
                name={item.name}
                iconUrl={item.icon}
                address={item.formatted_address}
                onPress={onPress({
                    latitude: item.geometry.location.lat,
                    longitude: item.geometry.location.long
                })}
            />
        );
    }
    
    return (
        <Modal onRequestClose={closeModal} visible={visible} animationType='fade'>
            <StyledFlatList 
                stickyHeaderIndices={[0]}
                data={models.textSearchQueryResponseData} 
                renderItem={renderFlatListItem} 
                ItemSeparatorComponent={ItemSeperatorComponent}
                contentContainerStyle={styles.flatListContainer}
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