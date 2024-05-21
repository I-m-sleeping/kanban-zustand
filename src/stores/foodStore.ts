import { create } from "zustand";

const initialFoodValue = {
  fish: 0,
};

export const useFoodStore = create<typeof initialFoodValue>()(() => initialFoodValue)

export const addOneFish =()=> useFoodStore.setState((state) => ({ fish: state.fish + 1}));
export const removeOneFish =()=> useFoodStore.setState((state) => ({ fish: state.fish - 1}));
export const removeAllFish =()=> useFoodStore.setState({ fish: 0 });
