import React, { FC } from 'react';
import { ModalOverlayProps } from './interfaces';
import { MainContainer } from './styles';

/** Оверлей для модалки */
const ModalOverlay: FC<ModalOverlayProps> = (props) => {
    const { children, backgroundType } = props;
    return(
        <MainContainer backgroundType={backgroundType}>
            {children}
        </MainContainer>
    )
}

export default ModalOverlay;