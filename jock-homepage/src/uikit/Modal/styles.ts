import styled, { keyframes } from 'styled-components';
import { bounceInLeft } from 'react-animations';

export const MainContainer = styled.div`
    position: absolute;
    background-color: #FFF;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 600px;
    height: 400px;
    border-radius: 12px;
    padding: 4px;
`;

export const AnimationContainer = styled.div`
    height: 100%;
    animation: 2s ${keyframes`${bounceInLeft}`} 1;
`;