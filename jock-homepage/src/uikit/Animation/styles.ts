import styled, { keyframes, css } from 'styled-components';
import { AnimationSettings } from './interfaces';
import { getAnimationLibraryByName } from './helpers/animationHelpers';

export const AnimationContainer = styled.div<AnimationSettings>`
    height: 100%;
    width: 100%;
    ${({ time, count, name }) => css`animation: ${time}s ${keyframes`${getAnimationLibraryByName(name)}`} ${count};`}
`;