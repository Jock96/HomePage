import React, { FC, useState, useCallback } from 'react';
import { InputProps } from './interfaces';
import { InputField } from './styles';

/** Компонент ввода */
const Input: FC<InputProps> = (props) => {
    const { value, onChange, placeholder } = props;
    return(
        <InputField value={value} onChange={onChange} placeholder={placeholder} />
    );
}

export default Input;