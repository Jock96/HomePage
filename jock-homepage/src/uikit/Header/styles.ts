import styled, { keyframes, css, FlattenSimpleInterpolation } from 'styled-components';
import { getRandomEm } from './helpers/randomizer';
import { StylesExtension } from './interfaces';

const MainStyle = css`
    color: #fff;
`;

const RedColor = css`rgba(255, 0, 0, 0.75)`;
const GreenColor = css`rgba(0, 255, 0, 0.75)`;
const BlueColor = css`rgba(0, 0, 255, 0.75)`;

const GlitchEffect = keyframes`
    0% {
    text-shadow: ${getRandomEm(0.05, 0.5)} ${getRandomEm(0.05, 0.5)} 0 ${RedColor},
                 ${getRandomEm(0.05, 0.5)} ${getRandomEm(0.05, 0.5)} 0 ${GreenColor},
                 ${getRandomEm(0.05, 0.5)} ${getRandomEm(0.05, 0.5)} 0 ${BlueColor};
    }
    14% {
    text-shadow: ${getRandomEm(0.05, 0.5)} ${getRandomEm(0.05, 0.5)} 0 ${RedColor},
                 ${getRandomEm(0.05, 0.5)} ${getRandomEm(0.05, 0.5)} 0 ${GreenColor},
                 ${getRandomEm(0.05, 0.5)} ${getRandomEm(0.05, 0.5)} 0 ${BlueColor};
    }
    15% {
    text-shadow: ${getRandomEm(0.05, 0.5)} ${getRandomEm(0.05, 0.5)} 0 ${RedColor},
                 ${getRandomEm(0.05, 0.5)} ${getRandomEm(0.05, 0.5)} 0 ${GreenColor},
                 ${getRandomEm(0.05, 0.5)} ${getRandomEm(0.05, 0.5)} 0 ${BlueColor};
    }
    49% {
    text-shadow: ${getRandomEm(0.05, 0.5)} ${getRandomEm(0.05, 0.5)} 0 ${RedColor},
                 ${getRandomEm(0.05, 0.5)} ${getRandomEm(0.05, 0.5)} 0 ${GreenColor},
                 ${getRandomEm(0.05, 0.5)} ${getRandomEm(0.05, 0.5)} 0 ${BlueColor};
    }
    50% {
    text-shadow: ${getRandomEm(0.05, 0.5)} ${getRandomEm(0.05, 0.5)} 0 ${RedColor},
                 ${getRandomEm(0.05, 0.5)} ${getRandomEm(0.05, 0.5)} 0 ${GreenColor},
                 ${getRandomEm(0.05, 0.5)} ${getRandomEm(0.05, 0.5)} 0 ${BlueColor};
    }
    99% {
    text-shadow: ${getRandomEm(0.05, 0.5)} ${getRandomEm(0.05, 0.5)} 0 ${RedColor},
                 ${getRandomEm(0.05, 0.5)} ${getRandomEm(0.05, 0.5)} 0 ${GreenColor},
                 ${getRandomEm(0.05, 0.5)} ${getRandomEm(0.05, 0.5)} 0 ${BlueColor};
    }
    100% {
    text-shadow: ${getRandomEm(0.05, 0.5)} ${getRandomEm(0.05, 0.5)} 0 ${RedColor},
                 ${getRandomEm(0.05, 0.5)} ${getRandomEm(0.05, 0.5)} 0 ${GreenColor},
                 ${getRandomEm(0.05, 0.5)} ${getRandomEm(0.05, 0.5)} 0 ${BlueColor};
    }
`;

const Glitch = css`
    position: relative;

    text-shadow: 0.05em 0 0 ${RedColor},
    -0.025em -0.05em 0 ${GreenColor},
    0.025em 0.05em 0 ${BlueColor};

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