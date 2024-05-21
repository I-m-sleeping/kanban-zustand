import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "../utils/createSelectors";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";

type TCatStoreState = {
  cats: {
    bigCats: number;
    smallCats: number;
  };
  increaseBigCats: () => void;
  increaseSmallCats: () => void;
  summary: () => string;
};

export const useCatStore = createSelectors(
  create<TCatStoreState>()(
    immer(
      devtools(
        subscribeWithSelector(
          persist(
            (set, get) => ({
              cats: {
                bigCats: 0,
                smallCats: 0
              },
              increaseBigCats: ()=>{
                set(
                  (state) => {
                    state.cats.bigCats++;
                  }
                )
              },
              increaseSmallCats: () => {
                set(
                  (state) => {
                    state.cats.smallCats++;
                    return state;
                  }
                )
              },
              summary: () => {
                const total = get().cats.smallCats + get().cats.bigCats;
                return `There are ${total} cats in total. `;
              }
            }),
            {
              name: "cat store",
            }
          )
        ),{
          name: "cat store",
        }
      )
    )
  )  
) 