/* eslint-disable @typescript-eslint/no-explicit-any */
import { IDeposit } from "@/lib/types/deposit.type";
import { create } from "zustand";

export const useDepositStore = create<IDeposit>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: any) => set(() => ({ isOpen: isOpen })),
}));
