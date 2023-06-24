import React from 'react'
import { Container } from './styles'
import CustomText from '@/components/common/CustomText'
import Spacer from '@/components/common/Spacer'
import { scale } from 'react-native-size-matters'

interface SectionHeaderProps {
    title: string
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
    return (
        <Container>
            <Spacer width={scale(25)} />
            <CustomText variant='header'>{title}</CustomText>
        </Container>
    )
}

export default SectionHeader