/** Пропсы инпута */
export interface InputProps extends StylesExtension {
    /** Начальное значение */
    value: string;
    /** Коллбек изменения */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** Шаблон */
    placeholder?: string;
}

/** Пропсы расширения стилей */
export interface StylesExtension {
    /** Применить анимацию пульса? */
    isPulsed?: boolean;
}