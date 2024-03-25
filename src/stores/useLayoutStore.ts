import { create } from 'zustand';

interface LayoutState {
  isShow: boolean;
  setShowSidebar: (by: boolean) => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
  isShow: true,
  setShowSidebar: (show: boolean) => set({ isShow: show }),
}));
