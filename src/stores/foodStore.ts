import { create } from "zustand";

type TFoodStoreState = {
  fish: number;
};

export const useFoodStore = create<TFoodStoreState>()((set) => ({
  fish: 0,
}))

export const addOneFish =()=> useFoodStore.setState((state) => ({ fish: state.fish + 1}));
export const removeOneFish =()=> useFoodStore.setState((state) => ({ fish: state.fish - 1}));
export const removeAllFish =()=> useFoodStore.setState({ fish: 0 });
