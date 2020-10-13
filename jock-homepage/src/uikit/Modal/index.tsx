import React, { FC } from 'react';
import Portal from '../Portal';
import { ModalProps } from './interfaces';
import ModalOverlay from './shared/ModalOverlay';
import { MainContainer, AnimationContainer } from './styles';

/** Компонент модального окна */
const Modal: FC<ModalProps> = (props) => {
    const { isOpen, animationSettings, children } = props;
    return isOpen ? ( 
        <Portal>
            <ModalOverlay>
                {animationSettings ? 
                    (
                        <AnimationContainer>
                            <MainContainer>
                                {children}
                            </MainContainer>
                        </AnimationContainer>
                    )
                    :
                    (
                        <MainContainer>
                            {children}
                        </MainContainer>
                    )
                }
            </ModalOverlay>
        </Portal>
    ) : null;
}

export default Modal;