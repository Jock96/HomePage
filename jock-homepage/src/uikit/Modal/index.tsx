import React, { FC } from 'react';
import Portal from '../Portal';
import { ModalProps } from './interfaces';
import ModalOverlay from './shared/ModalOverlay';
import { MainContainer, MoveOnAnimationContainer } from './styles';

/** Компонент модального окна */
const Modal: FC<ModalProps> = (props) => {
    const { isOpen, isAnimated, children } = props;
    return isOpen ? ( 
        <Portal>
            <ModalOverlay>
                {isAnimated ? 
                    (
                        <MoveOnAnimationContainer>
                            <MainContainer>
                                {children}
                            </MainContainer>
                        </MoveOnAnimationContainer>
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