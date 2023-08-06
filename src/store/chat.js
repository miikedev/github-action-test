export default{
    namespaced: true,
    state: {
        message: '',
    },
    mutations: {
        SEND_MESSAGE(state, message){
            state.message = message;
            console.warn("message from Mutation", message);
        }
    },
    actions: {
        async storeMessages({commit}, message){
            commit('SEND_MESSAGE',message);
        }
    }
}