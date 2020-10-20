import React, { FC, useState, useCallback } from 'react';
import Header from '../../uikit/Header';
import { HeaderTypes } from '../../uikit/Header/interfaces';
import Input from '../../uikit/Input';
import { InputContainer, Maincontainer } from './styles';

const HelloWindow: FC = (props) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [patronymic, setPatronymic] = useState("");
    const [organization, setOrganization] = useState("");
    const [email, setEmail] = useState("");

    const handleNameChange = useCallback((event) => {
        const { value } = event.target;
        setName(value);
    }, []);

    const handleSurnameChange = useCallback((event) => {
        const { value } = event.target;
        setSurname(value);
    }, []);

    const handlePatronymicChange = useCallback((event) => {
        const { value } = event.target;
        setPatronymic(value);
    }, []);

    const handleOrganizationChange = useCallback((event) => {
        const { value } = event.target;
        setOrganization(value);
    }, []);

    const handleEmailChange = useCallback((event) => {
        const { value } = event.target;
        setEmail(value);
    }, []);

    return(
        <Maincontainer>
            <Header useGlitch type={HeaderTypes.Head2}>Привет!</Header>
            <InputContainer>
                <Header useGlitch type={HeaderTypes.Head3}>Имя:</Header>
                <Input value={name} onChange={handleNameChange} placeholder="Введите текст..." />
            </InputContainer>
            <InputContainer>
                <Header useGlitch type={HeaderTypes.Head3}>Фамилия:</Header>
                <Input value={surname} onChange={handleSurnameChange} placeholder="Введите текст..." />
            </InputContainer>
            <InputContainer>
                <Header useGlitch type={HeaderTypes.Head3}>Отчество:</Header>
                <Input value={patronymic} onChange={handlePatronymicChange} placeholder="Введите текст..." />
            </InputContainer>
            <InputContainer>
                <Header useGlitch type={HeaderTypes.Head3}>Организация:</Header>
                <Input value={organization} onChange={handleOrganizationChange} placeholder="Введите текст..." />
            </InputContainer>
            <InputContainer>
                <Header useGlitch type={HeaderTypes.Head3}>E-Mail:</Header>
                <Input value={email} onChange={handleEmailChange} placeholder="Введите текст..." />
            </InputContainer>
        </Maincontainer>
    );
};

export default HelloWindow;