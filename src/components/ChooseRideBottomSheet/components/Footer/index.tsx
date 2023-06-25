import React from 'react'
import { Container, HorizontalContainer, IconsContainer, LeftIconContainer, TextContainer } from './styles';
import Divider from '@/components/common/Divider';
import Spacer from '@/components/common/Spacer';
import { scale } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@emotion/react';
import CustomText from '@/components/common/CustomText';

const Footer = () => {
    const theme = useTheme();

    return (
        <Container>
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
        </Container>
    )
}

export default Footer