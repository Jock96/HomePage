import styled, { keyframes, css, FlattenSimpleInterpolation } from 'styled-components';
import { StylesExtension } from './interfaces';

const MainStyle = css`
    color: #fff;
`;

const GlitchEffect = keyframes`
    0% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }
    14% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }
    15% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
        0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
        -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    49% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
        0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
        -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    50% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
        0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    99% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
        0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    100% {
    text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
`;

const Glitch = css`
    position: relative;

    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
    -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
    0.025em 0.05em 0 rgba(0, 0, 255, 0.75);

    animation: ${GlitchEffect} 500ms infinite;

    & > span:first-child {
        animation: ${GlitchEffect} 650ms infinite;
        clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
        transform: translate(-0.025em, -0.0125em);
        opacity: 0.8;
    }

    & > span:last-child {
        animation: ${GlitchEffect} 375ms infinite;
        clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
        transform: translate(0.0125em, 0.025em);
        opacity: 0.8;
    }

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export const GlitchSpan = styled.span`
    position: absolute;
    top: 0;
    left: 0;
`;

export const Head1 = styled.h1<StylesExtension>`
    ${MainStyle}
    ${({ useGlitch }): FlattenSimpleInterpolation => useGlitch ? css`${Glitch}` : css``}
`;

export const Head2 = styled.h2<StylesExtension>`
    ${MainStyle}
    ${({ useGlitch }): FlattenSimpleInterpolation => useGlitch ? css`${Glitch}` : css``}
`;

export const Head3 = styled.h3<StylesExtension>`
    ${MainStyle}
    ${({ useGlitch }): FlattenSimpleInterpolation => useGlitch ? css`${Glitch}` : css``}
`;

export const Head4 = styled.h4<StylesExtension>`
    ${MainStyle}
    ${({ useGlitch }): FlattenSimpleInterpolation => useGlitch ? css`${Glitch}` : css``}
`;

export const Head5 = styled.h5<StylesExtension>`
    ${MainStyle}
    ${({ useGlitch }): FlattenSimpleInterpolation => useGlitch ? css`${Glitch}` : css``}
`;

export const Head6 = styled.h6<StylesExtension>`
    ${MainStyle}
    ${({ useGlitch }): FlattenSimpleInterpolation => useGlitch ? css`${Glitch}` : css``}
`;

export const Paragraph = styled.p<StylesExtension>`
    ${MainStyle}
    ${({ useGlitch }): FlattenSimpleInterpolation => useGlitch ? css`${Glitch}` : css``}
`;