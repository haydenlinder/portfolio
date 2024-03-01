import { create } from 'zustand'

interface StateT {
  isDark: boolean
  toggleDark: () => void
  pan: number
  panBy: (n: number) => void
}

export const useStore = create<StateT>((set) => ({
    isDark : false,
    toggleDark: () => {
      document.querySelector('html')?.classList.toggle('dark')
      set(({isDark}) => ({isDark: !isDark}))
    },
    pan: 0,
    panBy: (n) => set(({pan}) => ({pan: pan + n*Math.PI/2}))
}))