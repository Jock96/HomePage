/** Типы бэкграунда */
export enum BackgroundTypes {
    IMAGE = 'IMAGE',
    GRADIENT = 'GRADIENT'
}

/** Расширение стилей */
export interface ModalOverlayProps {
    backgroundType?: BackgroundTypes;
}