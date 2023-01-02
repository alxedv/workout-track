import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const userProfileAtom = atomWithStorage('userProfile', '');
export const inputUserNameAtom = atom('');
export const nameWasSetAtom = atom(false);
