import { atom, useAtom } from 'jotai'

const isShow = atom(true)

export const useShowLayer = () => {
  return useAtom(isShow);
}