import React from 'react';

import {
    AlertStyles,
    CloseButton,
} from "./Alert.styles";
import { Text } from "../Text";

export const Alert = ({ onClick, children }) => {

    if (!children) {
        return null
    }

    return (
        <AlertStyles >
            <Text>
                {children}
            </Text>
            <CloseButton type="button" onClick={() => console.log("click close")}>
                Close
            </CloseButton>
        </AlertStyles>
    );
};
