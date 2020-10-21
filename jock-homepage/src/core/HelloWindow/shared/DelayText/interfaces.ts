import { AnimationSettings } from './../../../../uikit/Animation/interfaces';

/** Пропсы отложенного текста */
export interface DelayTextProps {
    /** Анимация появления */
    animationSettings: AnimationSettings;
    /** Задержка */
    delay: number;
    /** Текст */
    text: string;
}