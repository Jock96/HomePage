import { AnimationSettings } from "../../uikit/Animation/interfaces";
import { getLabelWithUpperFirstLetter, getPlaceholderByLabel } from "./helpers/textHelper";

/** Настройка анимации рендера элементов */
export const RENDER_ANIMATION_SETTINGS: AnimationSettings = { 
    name: 'fadeIn', 
    count: 1, 
    time: 5
};

/** Блок лейблов для ввода */

const NAME = 'имя';
const SURNAME = 'фамилия';
const PATRONYMIC = 'отчество';
const ORGANIZATION = 'организация';
const E_MAIL = 'E-Mail';

export enum STATE_TYPES {
    name = 'name',
    surname = 'surname',
    patronymic = 'patronymic',
    organization = 'organization',
    eMail = 'eMail',
}

export const INPUT_DATA_LIST = [
    {
        label: `${getLabelWithUpperFirstLetter(NAME)}:`,
        placeholder: getPlaceholderByLabel(NAME),
        type: STATE_TYPES.name,
    },
    {
        label: `${getLabelWithUpperFirstLetter(SURNAME)}:`,
        placeholder: getPlaceholderByLabel(SURNAME),
        type: STATE_TYPES.surname,
    },
    {
        label: `${getLabelWithUpperFirstLetter(PATRONYMIC)}:`,
        placeholder: getPlaceholderByLabel(PATRONYMIC),
        type: STATE_TYPES.patronymic,
    },
    {
        label: `${getLabelWithUpperFirstLetter(ORGANIZATION)}:`,
        placeholder: getPlaceholderByLabel(ORGANIZATION),
        type: STATE_TYPES.organization,
    },
    {
        label: E_MAIL,
        placeholder: getPlaceholderByLabel(E_MAIL),
        type: STATE_TYPES.eMail,
    },
]

/** Состояние компонента по умолчанию */
export const DEFAULT_STATE = {
    name: '',
    surname: '',
    patronymic: '',
    organization: '',
    eMail: '',
}

/** Сообщения */

/** Информационное сообщение */
export const INFO_MESSAGE = 'Я собираю информацию о посетителях, можешь рассказать о себе? Можешь и пропустить 💔';

/** Приветственное сообщение */
export const HELLO_MESSAGE = 'Привет! 🤍';