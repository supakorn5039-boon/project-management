import type { UserProps } from '@/types/Credential';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserState = {
   email: string;
   role: string;
   setUser: (user: UserProps) => void;
};

export const useUserStore = create<UserState>()(
   persist(
      set => ({
         email: '',
         role: '',
         setUser: (user: UserProps) => set({ email: user.email, role: user.role }),
      }),
      {
         name: 'user-storage',
      }
   )
);
