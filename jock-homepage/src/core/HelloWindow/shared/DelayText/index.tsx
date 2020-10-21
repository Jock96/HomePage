import React, { FC, useState } from 'react';
import AnimationWrapper from '../../../../uikit/Animation';
import Header from '../../../../uikit/Header';
import { HeaderTypes } from '../../../../uikit/Header/interfaces';
import { DelayTextProps } from './interfaces';

const DelayText: FC<DelayTextProps> = (props) => {
    const { animationSettings, delay, text } = props;
    const [render, setRender] = useState(false);

    setTimeout(() => {
        setRender(true);
    }, delay);

    return render ? (
        <AnimationWrapper animationSettings={animationSettings}>
            <Header useGlitch type={HeaderTypes.Head3}>{text}</Header>
        </AnimationWrapper>
    ) : null;
}

export default DelayText;