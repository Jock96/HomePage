import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

export const MainContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFF;
    min-height: 400px;
    min-width: 600px;
    border-radius: 12px;
    padding: 4px;
`;

export const MoveOnAnimationContainer = styled.div`
    animation: 2s ${keyframes`${bounce}`} 0
`;