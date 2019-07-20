import * as types from "./types";
// Store
export const state = () => ({
    dialogLoginVisible: false,
})

// Getters
export const getters = {
    getDialogLoginVisible(state) {
        return state.dialogLoginVisible;
    }
};

// Mutations
export const mutations = {
    [types.CHANGE_DIALOG_LOGINVISIBLE](state, isVisible) {
        state.dialogLoginVisible = isVisible;
    }
};

// Actions
export const actions = {
    changeDialogLoginVisible({ commit }, isVisible) {
        commit(types.CHANGE_DIALOG_LOGINVISIBLE, isVisible);
    }
}