import { create } from 'zustand';

export type CursorVariant = 'default' | 'link' | 'button' | 'image' | 'text' | 'click';

interface CursorState {
  variant: CursorVariant;
  text?: string;
  setVariant: (variant: CursorVariant, text?: string) => void;
}

export const useCursorStore = create<CursorState>((set) => ({
  variant: 'default',
  text: undefined,
  setVariant: (variant, text) => set({ variant, text }),
}));
