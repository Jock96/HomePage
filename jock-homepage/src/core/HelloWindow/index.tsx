import React, { FC, useState, useCallback } from 'react';
import AnimationWrapper from '../../uikit/Animation';
import Header from '../../uikit/Header';
import { HeaderTypes } from '../../uikit/Header/interfaces';
import Input from '../../uikit/Input';
import { INPUT_DATA_LIST, RENDER_ANIMATION_SETTINGS } from './constatnts';
import { useHelloWindowDataInput } from './hooks/useHelloWindowDataInput';
import { HelloWindowProps } from './interfaces';
import { ImageStyled, InputContainer, MainContainer, StubContainer } from './styles';

/** Компонент приветственного окна */
const HelloWindow: FC<HelloWindowProps> = (props) => {
    const { delayRender } = props;
    const [render, setRender] = useState(false);
    const { state, handleStateChange} = useHelloWindowDataInput();

    setTimeout(() => {
        setRender(true);
    }, delayRender + 500);

    return(
        <MainContainer>
            {
                render ? ( 
                <>
                    <AnimationWrapper animationSettings={RENDER_ANIMATION_SETTINGS}>
                        <Header useGlitch type={HeaderTypes.Head2}>Привет!</Header>
                    </AnimationWrapper>
                    {
                        INPUT_DATA_LIST.map(({ label, placeholder, type }) => {
                            return (
                                <InputContainer key={type}>
                                    <AnimationWrapper animationSettings={RENDER_ANIMATION_SETTINGS}>
                                        <Header useGlitch type={HeaderTypes.Head3}>{label}</Header>
                                    </AnimationWrapper>
                                    <AnimationWrapper animationSettings={RENDER_ANIMATION_SETTINGS}>
                                        <Input isPulsed value={state[type]} onChange={(event) => handleStateChange(event, type)} placeholder={placeholder} />
                                    </AnimationWrapper>
                                </InputContainer>
                            );
                        })
                    }
                </>
                ) : (
                    <StubContainer>
                        <ImageStyled src="/gifs/roundBitWithouBackground.gif" />
                    </StubContainer>
                )
            }
        </MainContainer>
    );
};

export default HelloWindow;