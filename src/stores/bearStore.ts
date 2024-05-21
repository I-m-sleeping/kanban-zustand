import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TBearStoreState = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

export const useBearStore = create<TBearStoreState>()(
  persist((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set ({ bears: 0 }),
  }),{
    name: "bears store",
    storage: createJSONStorage(() => sessionStorage),
  })
)