import styled, { keyframes } from 'styled-components';
import { pulse, swing } from 'react-animations';

export const MainContainer = styled.div`
    padding: 10px;
`;

export const InputContainer = styled.div`
    display: grid;
    grid-template-columns: 350px 200px;
    max-heigh: 200px;
    align-items: baseline;
`;

export const StubContainer = styled.div`
    text-align: center;
    animation: 2s ${keyframes`${swing}`} infinite;
`;

export const ImageStyled = styled.img`
    margin-left: -36px;
    width: 646px;
    height: 378px;
    animation: 0.25s ${keyframes`${pulse}`} infinite;
`;