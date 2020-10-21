import styled from 'styled-components';
import { ModalContainerProps } from './interfaces';

export const MainContainer = styled.div<ModalContainerProps>`
    position: absolute;
    background-color: #000;
    box-shadow: 0 0 10px #fff;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: ${({ width }): string => (width ?? 0).toString()}px;
    height: ${({ height }): string => (height ?? 0).toString()}px;
    border-radius: 12px;
    padding: 4px;
`;