/** Пропсы приветственного окна */
export interface HelloWindowProps {
    /** Задержка рендера */
    delayRender: number;
    /** Коллбек пропуска */
    onSkip: () => void;
}

/** Видимость линии */
export interface BreakLineProps {
    /** Видима? */
    isVisible?: boolean;
}