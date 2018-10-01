import axios from 'axios'

const baseUrl = process.env.apiUrl

export const MUTATION_TYPES = {
    ADD_ALL : 'ADD_ALL', 
    REMOVE_ALL: 'REMOVE_ALL', 
    SET_SELECTED_BY_UUID: 'SET_SELECTED_BY_UUID', 
    CLEAR_SELECTED: 'CLEAR_SELECTED'
}


export const state = () => ({
    list: [], 
    selected: null
})

export const mutations = {
    [MUTATION_TYPES.ADD_ALL] (state, users) {
        state.list.push(...users)
    }, 
    [MUTATION_TYPES.REMOVE_ALL] (state) {
        state.list.splice(0, state.list.length)
    }, 
    [MUTATION_TYPES.SET_SELECTED_BY_UUID] (state, uuid) {
        // add logic on how to find user by id
        state.selected = state.list.find(user => ( user.login.uuid === uuid )) || null
    }, 
    [MUTATION_TYPES.CLEAR_SELECTED] (state) {
        state.selected = null
    }
}

export const actions = {
    initialize : async ({commit}, options = {}) => {

        commit(MUTATION_TYPES.REMOVE_ALL) // clear

        const option_results = options.results > 0 ? options.results : 10
        const url = `${baseUrl}/?results=${option_results}`
        const {data} = await axios.get(url)
        const {results} = data

        commit(MUTATION_TYPES.ADD_ALL, results) // add users
    }, 
    selectUserByUUID: async({state, commit}, options = {}) => {
        const {uuid} = options
        // if has selected & selected is same as fetch
        if ( state.selected && state.selected.login.uuid === uuid ) {
            return;
        }
        commit(MUTATION_TYPES.SET_SELECTED_BY_UUID, uuid)
    }
}