import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const weightGoalAtom = atomWithStorage('weightGoal', '');
export const newWeightGoalAtom = atom('');
