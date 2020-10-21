import React, { FC, useState, useCallback } from 'react';
import { InputProps } from './interfaces';
import { InputField } from './styles';

/** Компонент ввода */
const Input: FC<InputProps> = (props) => {
    const { value, onChange, placeholder, isPulsed } = props;
    return(
        <InputField isPulsed={isPulsed} value={value} onChange={onChange} placeholder={placeholder} />
    );
}

export default Input;