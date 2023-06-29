import { create } from 'zustand'

interface CatalogStore {
  isOpen: boolean
  onClose: () => void
  onToggle: () => void
}

export const useCatalogStore = create<CatalogStore>((set) => ({
  isOpen: false,
  onClose: () => set(() => ({ isOpen: false })),
  onToggle: () => set((state) => ({ isOpen: !state.isOpen }))
}))
