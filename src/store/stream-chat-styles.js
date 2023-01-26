import { atom } from 'jotai';
import { focusAtom } from 'jotai-optics';

const initialStyles = {
  chat: {
    'background-color': 'transparent',
    'padding-inline': 10,
    'padding-block': 10,
    'margin-bottom': 10
  }
};

export const stylesAtom = atom(initialStyles);
export const chatStylesAtom = focusAtom(stylesAtom, (optic) => optic.prop('chat'));
