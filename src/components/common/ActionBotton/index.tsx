import React from 'react'
import { StylesPressable } from './styles'
import CustomText from '../CustomText'
import { useTheme } from '@emotion/react'

interface ActionButtonProps {
    text: string
}

const ActionButton = ({ text }: ActionButtonProps) => {
    const theme = useTheme();

    return (
        <StylesPressable>
            <CustomText 
                color={theme.colors.components.actionButton.fontColor} 
                variant='header'
            >
                {text}
            </CustomText>
        </StylesPressable>
    )
}

export default ActionButton