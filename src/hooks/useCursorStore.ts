import { create } from 'zustand';

export type CursorVariant = 'default' | 'link' | 'button' | 'image' | 'text' | 'click';

interface CursorState {
  variant: CursorVariant;
  text?: string | undefined;
  setVariant: (variant: CursorVariant, text?: string | undefined) => void;
}

export const useCursorStore = create<CursorState>((set) => ({
  variant: 'default',
  text: undefined,
  setVariant: (variant, text) => set({ variant, text }),
}));
