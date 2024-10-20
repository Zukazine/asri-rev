import { atom, useAtom } from 'jotai'

const isMinimize = atom(false)

export const useMinimizeSidebar = () => {
  return useAtom(isMinimize);
}