/**
 * Получает плейсхолдер для ввода по метке
 * @param label строковая метка
 */
export function getPlaceholderByLabel(label: string) {
    return `Введите ${label}...`;
}

/**
 * Получает элемент с первой заглавной буквой
 * @param label строковая метка
 */
export function getLabelWithUpperFirstLetter(label: string) {
    return `${label[0].toLocaleUpperCase()}${label.slice(1)}`;
}