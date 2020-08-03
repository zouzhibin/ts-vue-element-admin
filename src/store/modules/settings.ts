
import {stateTypes,actionsTypes} from '../tsTypes'
import {CHANGE_COLLAPSE} from '../types'

const state:stateTypes = {
    collapse: false,
}

const getters = {

}

const mutations = {
   [CHANGE_COLLAPSE]: (state:stateTypes) => {
        state.collapse = !state.collapse;
   },
}

const actions = {
    changeCollapse({ commit }:actionsTypes) {
        commit(CHANGE_COLLAPSE);
    },
}
export default { state, getters, mutations, actions };
