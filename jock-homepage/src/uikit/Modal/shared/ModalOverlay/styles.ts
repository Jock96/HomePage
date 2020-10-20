import styled, { keyframes } from 'styled-components';

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

// background-color: rgba(0, 0, 0, 0.25);
export const MainContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(45deg, rgba(7,0,36,1) 0%, rgba(157,26,182,1) 45%, rgba(0,212,255,1) 100%);
    background-size: 400% 400%;
    -webkit-animation: ${Gradient} 15s ease infinite;
    -moz-animation: ${Gradient} 15s ease infinite;
    animation: ${Gradient} 15s ease infinite;
}
`;
