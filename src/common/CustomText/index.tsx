import React from 'react'
import { BodyText } from './styles';

interface CustomTextProp {
    variant: 'body',
    children: string
}
const getComponent = (variant: CustomTextProp['variant']) => {
    switch (variant) {
        case "body":
            return BodyText;
        default:
            return BodyText;
    }
}

const CustomText = ({ variant, children }: CustomTextProp) => {
    const Component = getComponent(variant);

    return (
        <Component>
            {children}
        </Component>
    );
}

export default CustomText