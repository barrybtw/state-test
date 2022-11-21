import create, { StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

interface User {
  name: string;
}

export interface UserStore {
  user: User;
  setUser: (user: User) => void;
  getUser: () => User;
}

type MyPersist = (
  config: StateCreator<UserStore>,
  options: PersistOptions<UserStore>
) => StateCreator<UserStore>;

export const useUserStore = create<UserStore>(
  (persist as unknown as MyPersist)(
    (set, get) => ({
      user: {
        name: "",
      },
      setUser: (user: User) => set({ user }),
      getUser: () => get().user,
    }),
    {
      name: "userstore",
      getStorage: () => localStorage,
    }
  )
);
