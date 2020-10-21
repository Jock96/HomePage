import React, { FC } from 'react';
import AnimationWrapper from '../Animation';
import Portal from '../Portal';
import { ModalProps } from './interfaces';
import ModalOverlay from './shared/ModalOverlay';
import { MainContainer } from './styles';

/** Компонент модального окна */
const Modal: FC<ModalProps> = (props) => {
    const { isOpen, animationSettings, children, backgroundType, width = 600, height = 400 } = props;
    return isOpen ? ( 
        <Portal>
            <ModalOverlay backgroundType={backgroundType}>
                <AnimationWrapper animationSettings={animationSettings}>
                    <MainContainer width={width} height={height}>
                        {children}
                    </MainContainer>
                </AnimationWrapper>
            </ModalOverlay>
        </Portal>
    ) : null;
}

export default Modal;