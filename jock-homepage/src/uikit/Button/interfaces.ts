/** Пропсы компонента кнопки */
export interface ButtonProps extends StylesExtension {
    /** Имя иконки */
    iconName?: string;
    /** Клик на кнопку */
    onClick: () => void;
}

/** Расширение стилей */
export interface StylesExtension {
    /** С границами? */
    withBorder?: boolean;
    /** Недоступна? */
    disabled?: boolean;
}

/** Пропсы контейнера содержимомого */
export interface ContainerProps {
    /** С иконкой? */
    withIcon?: boolean;
}