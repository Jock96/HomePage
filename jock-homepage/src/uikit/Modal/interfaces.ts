import { AnimationSettings } from '../Animation/interfaces';
import { ModalOverlayProps } from './shared/ModalOverlay/interfaces';

/** Пропсы модалки */
export interface ModalProps extends ModalOverlayProps, ModalContainerProps {
    /** Модал открыт? */
    isOpen?: boolean;
    /** Настройки анимации */
    animationSettings?: AnimationSettings;
}

/** Пропсы контейнера модалки */
export interface ModalContainerProps {
    /** Ширина */
    width?: number;
    /** Высота */
    height?: number;
}