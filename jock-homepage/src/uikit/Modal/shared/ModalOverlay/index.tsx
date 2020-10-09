import React, { FC } from 'react';
import { MainContainer } from './styles';

/** Оверлей для модалки */
const ModalOverlay: FC = (props) => {
    const { children } = props;
    return(
        <MainContainer>
            {children}
        </MainContainer>
    )
}

export default ModalOverlay;