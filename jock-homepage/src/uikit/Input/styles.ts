import styled, { css, FlattenSimpleInterpolation, keyframes } from 'styled-components';
import { StylesExtension } from './interfaces';

const transparentPulse = keyframes`
    0% {
        background: rgba(255, 255, 255, 0.35);
    }
    25% {
        background: rgba(255, 255, 255, 0.25);
    }
    50% {
        background: rgba(255, 255, 255, 0.15);
    }
    75% {
        background: rgba(255, 255, 255, 0.25);
    }
    100% {
        background: rgba(255, 255, 255, 0.35);
    }
`;

export const InputField = styled.input<StylesExtension>`
    min-width: 200px;
    outline: none;
    padding: 8px;
    margin: 4px;
    border-radius: 8px;
    border: 2px solid #DCDCDC;

    &:focus {
        border: 2px solid #9999FF;
    }

    cursor: url(/cursors/HandWriting.cur), auto;
    background: rgba(255, 255, 255, 0.25);
    color: #fff;

    &::placeholder {
        color: #fff;
    }

    ${({ isPulsed }): FlattenSimpleInterpolation => isPulsed ? css`animation: 5s ${transparentPulse} linear infinite;`: css``}
`;
