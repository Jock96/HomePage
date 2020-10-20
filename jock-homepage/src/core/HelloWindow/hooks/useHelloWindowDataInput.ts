import { useCallback, useState } from 'react';

/** Хук управляет состоянием ввода в приветственном окне */
export function useHelloWindowDataInput() {
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

    return {
        name,
        surname,
        patronymic,
        organization,
        email,
        handleNameChange,
        handleSurnameChange,
        handlePatronymicChange,
        handleOrganizationChange,
        handleEmailChange,
    }
};
