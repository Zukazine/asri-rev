import { atom, useAtom } from 'jotai'

const isOpen = atom(false)

export const useEeModal = () => {
  return useAtom(isOpen);
}