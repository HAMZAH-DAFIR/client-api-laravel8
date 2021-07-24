import axios from 'axios';
export default {
    namespaced: true,
    state: {
        token: null,
        user: null
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        setUser(state, user) {
            state.user = user
        }
    },
    getters: {
        authf(state) {
            return state.token && state.user;
        },
        user(state) {
            return state.user;
        }
    },
    actions: {
        async singin({ dispatch }, credentials) {
            try {
                const response = await axios.post('login', credentials);
                return dispatch('attempt', response.data.token);
            } catch (error) {
                console.log(error);
            }
        },
        async attempt({ commit }, token) {
            try {
                const response = await axios.get('profil', {
                    headers: { 'Authorization': `bearer ${token}` }
                })
                commit('setToken', token);
                commit('setUser', response.data.user);
                console.log(response.data.user);
            } catch (error) {
                console.error(error)
            }
        }
    },
    modules: {}

}