import { TOGGLE_SLIDE, STOP_LOADING, CLOSE_SLIDE } from "./types";

export const toggleSlide = () => {
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
