import { AnimationSettings } from '../Animation/interfaces';
import { ModalOverlayProps } from './shared/ModalOverlay/interfaces';

/** Пропсы модалки */
export interface ModalProps extends ModalOverlayProps {
    /** Модал открыт? */
    isOpen?: boolean;
    /** Настройки анимации */
    animationSettings?: AnimationSettings;
}