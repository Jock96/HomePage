import * as animationTypes from 'react-animations';

/**
 * Проверяет существует ли такая анимация
 * @param name имя анимации
 */
export function isAnimationExist(name: string) {
    for (const key in animationTypes) {
        if (key === name) return true;
    }
    return false;
}

/** Получить весь список анимаций */
export function getAllAnimationTypes() {
    const animationList = [];
    for (const key in animationTypes) {
        animationList.push(key);
    }
    return animationList;
}

/**
 * Получить библиотеку анимации по имени
 * @param name Имя анимации
 */
export function getAnimationLibraryByName(name: string) {
    if (isAnimationExist(name)) {
        for (const key in animationTypes) {
            if (key === name) return animationTypes[key];
        }
    }
}