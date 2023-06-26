import { create } from 'zustand';

interface Card {
  number: string;
  name: string;
  exp: string;
}

interface CardState {
  cards: Card[];
  addCard: (card: Card) => void;
  removeAll: () => void;
}

export const useCardStore = create<CardState>((set) => ({
  cards: [],
  addCard: (card: Card) => set((state) => ({ cards: [...state.cards, card] })),
  removeAll: () => set({ cards: [] }),
}));
