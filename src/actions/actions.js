import { ADD_FEATURES, REMOVE_FEATURES } from "../reducers/reducer";

export const addFeatures = (feature) => {
  console.log("Dispatching ADD_FEATURES action", feature);
  return { type: ADD_FEATURES, payload: feature };
};

export const removeFeatures = (feature) => {
  console.log("Dispatching REMOVE_FEATURES action", feature);
  return { type: REMOVE_FEATURES, payload: feature };
};
