import { AnimationSettings } from '../Animation/interfaces';

/** Пропсы модалки */
export interface ModalProps {
    /** Модал открыт? */
    isOpen?: boolean;
    /** Настройки анимации */
    animationSettings?: AnimationSettings;
}