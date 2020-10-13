import React, { FC } from 'react';
import { isAnimationExist } from './helpers/animationHelpers';
import { AnimationWrapperProps } from './interfaces';
import { AnimationContainer } from './styles';

/** Обёртка для анимации */
const AnimationWrapper: FC<AnimationWrapperProps> = (props) => {
    const { children, animationSettings } = props;
    /** Если настройки не переданы - просто возвращаем компонент */
    if (!animationSettings) return (<>{children}</>);
    const { name, count, time } = animationSettings;
    const isCanAnimate = isAnimationExist(name);
    return (
        isCanAnimate ? 
        (
            <AnimationContainer name={name} count={count} time={time}>
                {children}
            </AnimationContainer>
        ) : (
            <>{children}</>
        )
    );
}

export default AnimationWrapper;