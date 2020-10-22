import styled, { css, FlattenSimpleInterpolation, keyframes } from 'styled-components';
import { pulse, swing } from 'react-animations';
import { BreakLineProps } from './interfaces';

export const MainContainer = styled.div`
    padding: 0 10px;
`;

export const InputContainer = styled.div`
    display: grid;
    grid-template-columns: 350px 200px;
    grid-gap: 6px;
    max-heigh: 200px;
    align-items: baseline;
`;

export const StubContainer = styled.div`
    text-align: center;
    animation: 2s ${keyframes`${swing}`} infinite;
`;

export const ImageStyled = styled.img`
    margin-top: 46px;
    margin-left: -36px;
    width: 646px;
    height: 378px;
    animation: 0.25s ${keyframes`${pulse}`} infinite;
`;

export const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 108px 454px;
    grid-gap: 18px;
    height: 76px;

    & > div:first-child > h3 {
        margin-top: 30px;
    }
`;

const BreakLineAnimation = keyframes`
    0% {
        width: 0%;
    }
    50% {
        width: 50%;
    }
    100% {
        width: 100%;
    }
`;

export const BreakLine = styled.div<BreakLineProps>`
    ${({ isVisible }): FlattenSimpleInterpolation => isVisible ? css`` : css`display: none;`}
    margin: 10px 0;
    height: 1px;
    background-color: white;
    animation: 2s ${BreakLineAnimation} ease-in-out 1;
`;

export const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: 100px 100px;
    grid-gap: 392px;
`;