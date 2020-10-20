/** Пропсы инпута */
export interface InputProps {
    /** Начальное значение */
    value: string;
    /** Коллбек изменения */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** Шаблон */
    placeholder?: string;
}