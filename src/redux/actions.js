import * as actions from "./actionTypes";

export const del = (id) => {
  return {
    type: actions.DELETE_MOVIE,
    payload: id,
  };
};

export const add = (newMov) => {
  return {
    type: actions.ADD_MOVIE,
    payload: newMov,
  };
};

export const edit = (editedMov) => {
  return {
    type: actions.EDIT_MOVIE,
    payload: editedMov,
  };
};

export const scifi = () => {
  return {
    type: actions.SCIFI_MOVIE,
  };
};
export const drama = () => {
  return {
    type: actions.DRAMA_MOVIE,
  };
};
export const adventure = () => {
  return {
    type: actions.ADVENTURE_MOVIE,
  };
};
export const all = () => {
  return {
    type: actions.ALL_MOVIE,
  };
};
