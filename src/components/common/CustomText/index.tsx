import React from 'react'
import { BodyText, CaptionText, TitleText } from './styles';

interface CustomTextProp {
    variant: 'body' | 'title' | 'caption',
    children: string
}
const getComponent = (variant: CustomTextProp['variant']) => {
    switch (variant) {
        case "body":
            return BodyText;
        case "title":
            return TitleText;
        case "caption":
            return CaptionText;
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