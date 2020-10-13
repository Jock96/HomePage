import { DEFAULT_INFINITE_ANIMATION_COUNT } from "./constants";

/** Настройки анимации */
export interface AnimationSettings {
    /** время выполнение анимации */
    time: number;
    /** Количество повторений */
    count: number | typeof DEFAULT_INFINITE_ANIMATION_COUNT;
    /** Имя анимации */
    name: string;
}