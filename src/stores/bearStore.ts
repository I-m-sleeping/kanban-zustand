import { create } from "zustand";
import { persist } from "zustand/middleware";

type TBearStoreState = {
  bears: number;
  color: string;
  size: string;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

export const useBearStore = create<TBearStoreState>()(
  persist((set) => ({
    bears: 0,
    color: "red",
    size: "big",
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set ({ bears: 0 }),
  }),{
    name: "bears store",
    partialize: (state) => ({bears: state.bears})
  })
)