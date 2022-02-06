import styled from "styled-components";




export const TextStyles = styled.div`
    text-transform: ${({ theme }) => theme.text.textTransform};
    text-align: ${ props => props.align };
`