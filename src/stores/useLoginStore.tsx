import { create } from 'zustand';
interface LoginState {
  isLog: boolean;
  setLogin: (by: boolean) => void;
}
export const useLoginStore = create<LoginState>((set) => ({
  isLog: false,
  setLogin: (log: boolean) => set({ isLog: log }),
}));
