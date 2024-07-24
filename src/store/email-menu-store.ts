import EmailMenuProps from "@/interfaces/email-menu-props";
import { create } from "zustand";

const emailMenuStore = create<EmailMenuProps>((set) => ({
  showMenu: false,
  setShowMenu: (showMenu) => set({ showMenu }),
  outerWindowHandler: "hidden",
  setOuterWindowHanlder: (outerWindowHandler) => set({ outerWindowHandler }),
}));

export default emailMenuStore;
