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
  update: (card: CardProps) => void;
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
      update: (data: CardProps) =>
        set(() => {
          const card = get().cards.find((c) => c.id === data.id);
          const cards = get().cards;
          if (!card) return { cards };
          get().cards[data.id] = data;
          return { cards };
        }),
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
