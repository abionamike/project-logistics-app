import React from 'react'
import { DisabledInput, Input } from './styles'

interface DestinationInputProps {
    disabled?: boolean,
    placeholder?: string,
    autoFocus?: boolean,
    onChangeText?: (text: string) => void,
    value?: string,
}

const DestinationInput = ({ value, disabled, placeholder, autoFocus, onChangeText }: DestinationInputProps) => {
    const sharedProps = { placeholder };
    
    return disabled ? (
        <DisabledInput 
            editable={false}
            {...sharedProps}
        /> 
    ) : (
        <Input 
            onChangeText={onChangeText}
            autoFocus={autoFocus}
            {...sharedProps}
            value={value}
        />
    )
}

export default DestinationInput