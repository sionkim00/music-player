import { atom } from "recoil";
import data from "./util";

export const currentSongState = atom({
  key: "currentSongState", // unique ID (with respect to other atoms/selectors)
  default: null // default value (aka initial value)
});

export const songsState = atom({
  key: "songsState",
  default: data()
});
