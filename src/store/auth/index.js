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
        async attempt({ commit, state }, token) {
            try {
                if (token) {
                    commit('setToken', token);
                }
                if (!state.token) {
                    return;
                }
                const response = await axios.get('profil')
                commit('setUser', response.data.user);
            } catch (error) {
                commit('setUser', null);
                commit('setToken', null);
            }
        }
    },
    modules: {}

}