import { atom } from 'jotai';
import { focusAtom } from 'jotai-optics';

const initialStyles = {
  chat: {
    'background-color': 'transparent',
    'padding-inline': 10,
    'padding-block': 10,
    'margin-bottom': 10
  },
  messages: {
    default: {
      'name-color': '#DFDFDF',
      'message-color': '#FFFFFF',
      'background-color': '#212121',
      'padding-inline': 16,
      'padding-block': 16,
      spacing: 8
    },
    owner: {},
    moderator: {},
    member: {}
  },
  sponsors: {
    'event-color': '#FFFFFF',
    'detail-color': '#FFFFFF',
    'padding-inline': 16,
    'padding-block': 16,
    'background-color': '#10A259',
    spacing: 8
  },
  superchat: {
    'header-padding-inline': 16,
    'header-padding-block': 16,
    spacing: 8,
    'content-padding-inline': 16,
    'content-padding-block': 16
  },
  animation: {
    in: {
      'animation-duration': 0.25,
      direction: 'left'
    },
    out: {}
  }
};

export const stylesAtom = atom(initialStyles);
export const chatStylesAtom = focusAtom(stylesAtom, (optic) => optic.prop('chat'));
export const messageStylesAtom = focusAtom(stylesAtom, (optic) => optic.prop('messages'));
export const sponsorStylesAtom = focusAtom(stylesAtom, (optic) => optic.prop('sponsors'));
export const superchatStylesAtom = focusAtom(stylesAtom, (optic) => optic.prop('superchat'));
export const animationStylesAtom = focusAtom(stylesAtom, (optic) => optic.prop('animation'));
