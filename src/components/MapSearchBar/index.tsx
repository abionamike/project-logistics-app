import React from 'react'
import { Container, Square, StyledPressable } from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CustomText from '@/common/CustomText';

interface MapSearchBarProps {
    onPress: () => void;
}

const MapSearchBar = ({ onPress }: MapSearchBarProps) => {
    const insets = useSafeAreaInsets();

    return (
        <Container insets={insets}>
            <StyledPressable onPress={onPress}>
                <Square />
                <CustomText variant='body'>Where to?</CustomText>
            </StyledPressable>
        </Container>
    )
}

export default MapSearchBar