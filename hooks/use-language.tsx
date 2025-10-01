"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

type Language = "vi" | "en"

interface LanguageStore {
  language: Language
  toggleLanguage: () => void
  setLanguage: (lang: Language) => void
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set) => ({
      language: "vi",
      toggleLanguage: () => set((state) => ({ language: state.language === "vi" ? "en" : "vi" })),
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: "language-storage",
    },
  ),
)
