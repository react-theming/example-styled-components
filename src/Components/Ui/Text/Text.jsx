import React from 'react';
import { TextStyles } from "./Text.styles";


export const Text = ({ children,  align = "left" }) => {

    if (!children) {
        return null;
    }

    return <TextStyles align={align}>{children}</TextStyles>;
};

