import styled, { css, FlattenSimpleInterpolation, keyframes } from 'styled-components';
import { ContainerProps, StylesExtension } from './interfaces';
import { tada, swing, flash } from 'react-animations';

export const ButtonStyled = styled.button<StylesExtension>`
    background: transparent;
    ${({ withBorder }): FlattenSimpleInterpolation => withBorder ? css`border-radius: 20px;`: css`border: none;` }
    padding: 4px;
    outline: none;
    min-width: 100px;

    ${({ disabled }): FlattenSimpleInterpolation => disabled ? 
    css`cursor: url(/cursors/Unavailable.cur), auto;`
    :
    css`cursor: url(/cursors/LinkSelect.cur), auto;`}

    &:hover {
        ${({ disabled }): FlattenSimpleInterpolation => disabled ?
        css`
        animation: 10s ${keyframes`${flash}`} infinite;
        `
        :
        css`animation: 10s ${keyframes`${tada}`} infinite;`}
    }
`;

export const Container = styled.div<ContainerProps>`
    ${({ withIcon }): FlattenSimpleInterpolation => withIcon ?
    css`
        display: grid;
        grid-template-columns: 24px 1fr;
        grid-gap: 8px;
    `
    :
    css``}
`;

export const IconContainer = styled.img`
    margin: auto;
`;