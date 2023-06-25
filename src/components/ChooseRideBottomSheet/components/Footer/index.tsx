import React from 'react'
import { ButtonContainer, Container, HorizontalContainer, IconsContainer, LeftIconContainer, TextContainer } from './styles';
import Divider from '@/components/common/Divider';
import Spacer from '@/components/common/Spacer';
import { scale } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@emotion/react';
import CustomText from '@/components/common/CustomText';
import ActionButton from '@/components/common/ActionBotton';
import { RideItem } from '@/src/types/rideItems';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

interface FooterProps {
    selectedRide: RideItem,
    offset: SharedValue<number>
}

const Footer = ({ selectedRide, offset }: FooterProps) => {
    const theme = useTheme();
    const insets = useSafeAreaInsets();

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: withTiming(offset.value) }]
    }));

    return (
        <Container style={animatedStyle} insets={insets}>
            <Divider />
            <Spacer height={scale(15)} />
            <HorizontalContainer>
                <IconsContainer>
                    <LeftIconContainer>
                        <Ionicons 
                            name='person' 
                            color={theme.colors.components.rideBottomSheet.footerLeftIconColor}
                            size={scale(14)} 
                        />
                    </LeftIconContainer>
                    <Ionicons 
                        name='briefcase-sharp' 
                        size={scale(14)} 
                    />
                </IconsContainer>
                <Spacer width={scale(10)} />
                <TextContainer>
                    <CustomText variant='smHeader'>Personal</CustomText>
                    <CustomText variant='caption'>Apple Pay</CustomText>
                </TextContainer>
                <Ionicons 
                    name='chevron-forward' 
                    size={scale(16)} 
                    color={theme.colors.typography.common} 
                />
            </HorizontalContainer>
            <Spacer height={scale(15)} />
            <ButtonContainer>
                <ActionButton text={`Choose: ${selectedRide.type}`} />
            </ButtonContainer>
        </Container>
    )
}

export default Footer