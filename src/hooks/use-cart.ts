import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type UseCart = {
  cartItems: string[]
  addItem: (itemId: string) => void
  removeItem: (itemId: string) => void
  inTheCart: (itemId: string) => boolean
}

const useCart = create(
  persist<UseCart>(
    (set, get) => ({
      cartItems: [],
      addItem: (itemId) => set({ cartItems: [...get().cartItems, itemId] }),
      removeItem: (itemId) =>
        set({ cartItems: get().cartItems.filter((id) => id !== itemId) }),
      inTheCart: (itemId) => get().cartItems.includes(itemId),
    }),
    {
      name: 'cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useCart
