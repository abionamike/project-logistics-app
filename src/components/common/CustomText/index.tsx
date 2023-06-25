import React from 'react'
import { BodyText, CaptionText, HeaderText, SmallHeaderText, TitleText } from './styles';

interface CustomTextProp {
    variant: 'body' | 'title' | 'caption' | 'header' | 'smHeader',
    children: string;
    color?: string
}
const getComponent = (variant: CustomTextProp['variant']) => {
    switch (variant) {
        case "body":
            return BodyText;
        case "title":
            return TitleText;
        case "caption":
            return CaptionText;
        case "header":
            return HeaderText;
        case "smHeader":
            return SmallHeaderText;
        default:
            return BodyText;
    }
}

const CustomText = ({ variant, children, color }: CustomTextProp) => {
    const Component = getComponent(variant);

    const sharedProps = {
        style: {
            ...(color ? { color } : {}),
        }
    }

    return (
        <Component { ...sharedProps }>
            {children}
        </Component>
    );
}

export default CustomText