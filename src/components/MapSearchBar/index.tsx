import React from 'react'
import { Container, Square, StyledPressable } from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CustomText from '@/components/common/CustomText';
import { FadeInDown } from 'react-native-reanimated';

interface MapSearchBarProps {
    onPress: () => void;
}

const MapSearchBar = ({ onPress }: MapSearchBarProps) => {
    const insets = useSafeAreaInsets();

    return (
        <Container entering={FadeInDown} insets={insets}>
            <StyledPressable onPress={onPress}>
                <Square />
                <CustomText variant='body'>Where to?</CustomText>
            </StyledPressable>
        </Container>
    )
}

export default MapSearchBar