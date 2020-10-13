import React, { FC } from 'react';
import AnimationWrapper from '../Animation';
import Portal from '../Portal';
import { ModalProps } from './interfaces';
import ModalOverlay from './shared/ModalOverlay';
import { MainContainer } from './styles';

/** Компонент модального окна */
const Modal: FC<ModalProps> = (props) => {
    const { isOpen, animationSettings, children } = props;
    return isOpen ? ( 
        <Portal>
            <ModalOverlay>
                <AnimationWrapper animationSettings={animationSettings}>
                    <MainContainer>
                        {children}
                    </MainContainer>
                </AnimationWrapper>
            </ModalOverlay>
        </Portal>
    ) : null;
}

export default Modal;