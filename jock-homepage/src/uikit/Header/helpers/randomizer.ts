/**
 * Возвращает рандомные em.
 * @param min минимальное не отрицательной число (отрицательное берётся по модулю)
 * @param max максимальное не отрицательной число (отрицательное берётся по модулю)
 */
export function getRandomEm(min?: number, max?: number) {
    const minus = Math.random() > 0.5 ? '-': '';
    const minFixed = (min ?? 0) < 0 ? Math.abs((min ?? 0)) : (min ?? 0);
    const maxFixed = (max ?? 0) < 0 ? Math.abs((max ?? 0)) : (max ?? 0);
    const number = !min && !max ? Math.random() : minFixed + Math.floor((maxFixed - minFixed) * Math.random());
    return `${minus}${number}em`
}

/**
 * Возвращает псевдослучайное число из указанного диапазона
 * @param min минимальное число
 * @param max максимальное число
 */
export function getRandomMinMax(min: number, max: number) {
    return min + Math.floor((max - min) * Math.random());
}