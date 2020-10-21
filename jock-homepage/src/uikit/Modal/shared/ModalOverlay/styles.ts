import styled, { css, FlattenSimpleInterpolation, keyframes } from 'styled-components';
import { BackgroundTypes, ModalOverlayProps } from './interfaces';

const Gradient = keyframes`
    0% {
        background-position: 0% 50%
    }
    50% {
        background-position: 100% 50%
    }
    100% {
        background-position: 0% 50%
    }
`;

export const MainContainer = styled.div<ModalOverlayProps>`
    ${({ backgroundType }): FlattenSimpleInterpolation => {
        switch (backgroundType) {
            case BackgroundTypes.GRADIENT:
                return css`
                    background: linear-gradient(45deg, rgba(7,0,36,1) 0%, rgba(157,26,182,1) 45%, rgba(0,212,255,1) 100%);
                    -webkit-animation: ${Gradient} 15s ease infinite;
                    -moz-animation: ${Gradient} 15s ease infinite;
                    animation: ${Gradient} 15s ease infinite;
                `;

            case BackgroundTypes.IMAGE:
                return css`
                    background-image: url(/gifs/background_1.gif);
                `;
        
            default:
                return css`background: #fff;`;
        }
    }}
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-size: 100% 100%;
}
`;
