import React, { FC } from 'react';
import { ButtonProps } from './interfaces';
import { ButtonStyled, Container, IconContainer } from './styles';

const Button: FC<ButtonProps> = (props) => {
    const { children, withBorder, disabled, iconName, onClick } = props;
    const isIcon = !!iconName;
    return(
        <ButtonStyled onClick={onClick} withBorder={withBorder} disabled={disabled}>
            <Container withIcon={isIcon}>
                {isIcon && <IconContainer src={`/icons/${iconName}.ico`} />}
                {children}
            </Container>
        </ButtonStyled>
    );
};

export default Button;