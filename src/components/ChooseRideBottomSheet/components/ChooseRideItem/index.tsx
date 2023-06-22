import React from 'react'
import { CarImage, Container, IconContainer, StyledPressable, TextContainer } from './styles';
import Spacer from '@/components/common/Spacer';
import { scale } from 'react-native-size-matters';
import CustomText from '@/components/common/CustomText';
import { Ionicons } from '@expo/vector-icons'

interface ChooseRideItemProps {
    title: string;
    price: string;
    description: string;
    eta: number;
    maxPassengers: number | null;
    selected: boolean;
    onPress: () => void;
    variant: "compact" | "expanded"
}

const ChooseRideItem = ({ title, description, price, selected, onPress, maxPassengers, variant }: ChooseRideItemProps) => {
    const isExtended = variant === "expanded"
    
    return (
        <StyledPressable selected={selected} onPress={onPress}>
            <CarImage source={require("@/assets/icon.png")} />
            <Spacer width={scale(5)} />
            <TextContainer>
                <Container>
                    <IconContainer>
                        <CustomText variant='header'>{title}</CustomText>
                        <Spacer width={scale(5)} />
                        {maxPassengers && (selected || isExtended) ? (
                            <>
                                <Ionicons name="person" size={scale(14)} />
                                <CustomText variant='body'>
                                    {maxPassengers.toString()}
                                </CustomText>
                            </>
                        ) : null}
                    </IconContainer>
                    {!isExtended ? <CustomText variant='body'>14:50</CustomText> : null}
                    {isExtended ? <CustomText variant='caption'>{description}</CustomText> : null}
                </Container>
                <CustomText variant='header'>{price}</CustomText>
            </TextContainer>
        </StyledPressable>
    )
}

export default ChooseRideItem