import React from "react";
import { StyledButtonWrapper } from "./Button.styles";


export const Button = ({ onClick, children }) => {
    return (
        <>
            <StyledButtonWrapper onClick={onClick} type="button">
                {children}
            </StyledButtonWrapper>
        </>
    );
};