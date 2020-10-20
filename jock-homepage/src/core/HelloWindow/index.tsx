import React, { FC, useState, useCallback } from 'react';
import AnimationWrapper from '../../uikit/Animation';
import { AnimationSettings } from '../../uikit/Animation/interfaces';
import Header from '../../uikit/Header';
import { HeaderTypes } from '../../uikit/Header/interfaces';
import Input from '../../uikit/Input';
import { useHelloWindowDataInput } from './hooks/useHelloWindowDataInput';
import { HelloWindowProps } from './interfaces';
import { ImageStyled, InputContainer, MainContainer, StubContainer } from './styles';

/** Компонент приветственного окна */
const HelloWindow: FC<HelloWindowProps> = (props) => {
    const { delayRender } = props;
    const [render, setRender] = useState(false);
    const { 
        name,
        email,
        surname,
        patronymic,
        organization,
        handleNameChange,
        handleEmailChange, 
        handleSurnameChange,
        handlePatronymicChange,
        handleOrganizationChange,
    } = useHelloWindowDataInput();

    const stubAnimationSettings: AnimationSettings = { 
        name: 'bounceInLeft', 
        count: 1, 
        time: 2
    };

    const renderAnimationSettings: AnimationSettings = { 
        name: 'fadeIn', 
        count: 1, 
        time: 5
    };

    setTimeout(() => {
        setRender(true);
    }, delayRender + 500);

    return(
        <MainContainer>
            {
                render ? ( 
                <>
                    <AnimationWrapper animationSettings={renderAnimationSettings}>
                        <Header useGlitch type={HeaderTypes.Head2}>Привет!</Header>
                    </AnimationWrapper>
                    <InputContainer>
                        <AnimationWrapper animationSettings={renderAnimationSettings}>
                            <Header useGlitch type={HeaderTypes.Head3}>Имя:</Header>
                        </AnimationWrapper>
                        <AnimationWrapper animationSettings={renderAnimationSettings}>
                            <Input value={name} onChange={handleNameChange} placeholder="Введите текст..." />
                        </AnimationWrapper>
                    </InputContainer>
                    <InputContainer>
                        <AnimationWrapper animationSettings={renderAnimationSettings}>
                            <Header useGlitch type={HeaderTypes.Head3}>Фамилия:</Header>
                        </AnimationWrapper>
                        <AnimationWrapper animationSettings={renderAnimationSettings}>
                            <Input value={surname} onChange={handleSurnameChange} placeholder="Введите текст..." />
                        </AnimationWrapper>
                    </InputContainer>
                    <InputContainer>
                        <AnimationWrapper animationSettings={renderAnimationSettings}>
                            <Header useGlitch type={HeaderTypes.Head3}>Отчество:</Header>
                        </AnimationWrapper>
                        <AnimationWrapper animationSettings={renderAnimationSettings}>
                            <Input value={patronymic} onChange={handlePatronymicChange} placeholder="Введите текст..." />
                        </AnimationWrapper>
                    </InputContainer>
                    <InputContainer>
                        <AnimationWrapper animationSettings={renderAnimationSettings}>
                            <Header useGlitch type={HeaderTypes.Head3}>Организация:</Header>
                        </AnimationWrapper>
                        <AnimationWrapper animationSettings={renderAnimationSettings}>
                            <Input value={organization} onChange={handleOrganizationChange} placeholder="Введите текст..." />
                        </AnimationWrapper>
                    </InputContainer>
                    <InputContainer>
                        <AnimationWrapper animationSettings={renderAnimationSettings}>
                            <Header useGlitch type={HeaderTypes.Head3}>E-Mail:</Header>
                        </AnimationWrapper>
                        <AnimationWrapper animationSettings={renderAnimationSettings}>
                            <Input value={email} onChange={handleEmailChange} placeholder="Введите текст..." />
                        </AnimationWrapper>
                    </InputContainer>
                </>
                ) : (
                    <StubContainer>
                        <ImageStyled src="roundBitWithouBackground.gif" />
                    </StubContainer>
                )
            }
        </MainContainer>
    );
};

export default HelloWindow;