import UrlFormatProps from "@/interfaces/url-format-props";
import { create } from "zustand";

const urlShortenedIDStore = create<UrlFormatProps>((set) => ({
  urlID: "",
  setUrlID: (urlID) => set({ urlID }),
  urlInputValue: "",
}));

export default urlShortenedIDStore;
