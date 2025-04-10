import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ThemeState } from './IThemeState';

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "",
      setTheme: (theme: string) => set({ theme }),
    }),
    {
      name: "theme-storage",
    }
  )
);