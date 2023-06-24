import React from 'react'
import { Container } from './styles'
import CustomText from '@/components/common/CustomText'
import Spacer from '@/components/common/Spacer'
import { scale } from 'react-native-size-matters'
import Divider from '@/components/common/Divider'

const Header = () => {
    return (
        <Container>
            <CustomText variant='header'>Choose your ride</CustomText>
            <Spacer height={scale(15)} />
        </Container>
    )
}

export default Header