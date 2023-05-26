import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { StyledPressable } from './styles';
import { scale } from 'react-native-size-matters'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface RoundButtonProps {
    icon: 'ios-menu-outline' | 'arrow-back-outline',
    onPress?: () => void
}

const RoundButton = ({ icon, onPress }: RoundButtonProps) => {
    const insets = useSafeAreaInsets();

    return (
        <StyledPressable insets={insets} onPress={onPress}>
            <Ionicons name={icon} size={scale(27)} />
        </StyledPressable>
    );
}

export default RoundButton