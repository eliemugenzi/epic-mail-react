import { TOGGLE_SLIDE, STOP_LOADING, CLOSE_SLIDE } from "./types";

export const toggleSlide = () => {
  console.log("clicked, from action");
  return {
    type: TOGGLE_SLIDE
  };
};

export const stopLoading = () => {
  return {
    type: STOP_LOADING
  };
};

export const closeSlide = () => {
  return {
    type: CLOSE_SLIDE
  };
};
