import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface CardProps {
  id: number;
  number: string;
  name: string;
  exp: string;
}

interface CardState {
  cards: CardProps[];
  add: (card: Omit<CardProps, 'id'>) => void;
  remove: (id: number) => void;
  removeAll: () => void;
}

export const useCardStore = create(
  persist<CardState>(
    (set, get) => ({
      cards: [],
      add: (card: Omit<CardProps, 'id'>) =>
        set(() => ({
          cards: [...get().cards, { ...card, id: get().cards.length }],
        })),
      remove: (id) =>
        set(() => ({ cards: get().cards.filter((c) => c.id !== id) })),
      removeAll: () => set({ cards: [] }),
    }),
    {
      name: 'card-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
