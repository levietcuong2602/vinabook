import * as types from "./types";
// Store
export const state = () => ({
  dialogLoginVisible: false,
  isOpenSideout: false
});

// Getters
export const getters = {
  getDialogLoginVisible(state) {
    return state.dialogLoginVisible;
  },
  getIsOpenSideout(state) {
    return state.isOpenSideout;
  }
};

// Mutations
export const mutations = {
  [types.CHANGE_DIALOG_LOGINVISIBLE](state, isVisible) {
    state.dialogLoginVisible = isVisible;
  },
  [types.UPDATE_IS_OPEN_SIDEOUT](state, isOpen) {
    state.isOpenSideout = isOpen;
  }
};

// Actions
export const actions = {
  changeDialogLoginVisible({ commit }, isVisible) {
    commit(types.CHANGE_DIALOG_LOGINVISIBLE, isVisible);
  },
  updateIsOpenSideout({ commit }, isOpen) {
    commit(types.UPDATE_IS_OPEN_SIDEOUT, isOpen);
  }
};
