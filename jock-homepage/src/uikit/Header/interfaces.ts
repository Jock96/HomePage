import { ReactNode } from "react";

/** Типы заголовков */
export enum HeaderTypes {
    Head1 = 'Head1',
    Head2 = 'Head2',
    Head3 = 'Head3',
    Head4 = 'Head4',
    Head5 = 'Head5',
    Head6 = 'Head6',
    Paragraph = 'Paragraph'
}

/** Пропсы компонента заголовка */
export interface HeaderProps extends StylesExtension {
    /** Типы заголовков */
    type: HeaderTypes;
}

export interface StylesExtension {
    /** Использовать Glitch-эффект */
    useGlitch?: boolean;
}
