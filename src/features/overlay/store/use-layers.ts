import { atom, useAtom } from 'jotai';

const atomCount = 3;
const atoms = Array.from({ length: atomCount }, () => atom(true));

export const [atom1, atom2, atom3] = atoms;

export const useLayers = (index: number) => {
  if (index < 0 || index >= atoms.length) {
    throw new Error(`No atom found at index: ${index}`);
  }
  return useAtom(atoms[index]);
};