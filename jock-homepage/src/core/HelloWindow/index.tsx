import React, { FC, useState } from 'react';
import AnimationWrapper from '../../uikit/Animation';
import Button from '../../uikit/Button';
import Header from '../../uikit/Header';
import { HeaderTypes } from '../../uikit/Header/interfaces';
import Input from '../../uikit/Input';
import { INPUT_DATA_LIST, RENDER_ANIMATION_SETTINGS, HELLO_MESSAGE, INFO_MESSAGE, SKIP, SUBMIT } from './constants';
import { useHelloWindowDataInput } from './hooks/useHelloWindowDataInput';
import { HelloWindowProps } from './interfaces';
import DelayText from './shared/DelayText';
import { BreakLine, InputContainer, MainContainer, HeaderContainer, FooterContainer } from './styles';

/** Компонент приветственного окна */
const HelloWindow: FC<HelloWindowProps> = (props) => {
    const { delayRender, onSkip } = props;
    const [render, setRender] = useState(false);
    const [isHeaderBreakline, setIsHeaderBreakline] = useState(false);
    const [isFooterBreakLine, setIsFooterBreakLine] = useState(false);
    const [isFooter, setIsFooter] = useState(false);
    const { state, handleStateChange} = useHelloWindowDataInput();

    setTimeout(() => {
        setRender(true);
    }, delayRender + 2000);

    setTimeout(() => {
        setIsHeaderBreakline(true);
    }, delayRender + 1500);

    setTimeout(() => {
        setIsFooterBreakLine(true);
    }, delayRender + 2500);

    setTimeout(() => {
        setIsFooter(true);
    }, delayRender + 3000);

    return(
        <MainContainer>
            <HeaderContainer>
                <DelayText animationSettings={RENDER_ANIMATION_SETTINGS} text={HELLO_MESSAGE} delay={delayRender} />
                <DelayText animationSettings={RENDER_ANIMATION_SETTINGS} text={INFO_MESSAGE} delay={delayRender + 1000}/>
            </HeaderContainer>
            <BreakLine isVisible={isHeaderBreakline} />
            {render &&
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
            <BreakLine isVisible={isFooterBreakLine} />
            {isFooter &&
                <AnimationWrapper animationSettings={RENDER_ANIMATION_SETTINGS}>
                    <FooterContainer>
                        <Button onClick={onSkip} iconName="sad" >
                            <Header useGlitch type={HeaderTypes.Head4}>{SKIP}</Header>
                        </Button>
                        <Button onClick={() => {}} disabled>
                            <Header useGlitch type={HeaderTypes.Head4}>{SUBMIT}</Header>
                        </Button>
                    </FooterContainer>
                </AnimationWrapper>
            }
        </MainContainer>
    );
};

export default HelloWindow;