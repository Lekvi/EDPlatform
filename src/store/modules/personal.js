export default {
    state: {
        currentTitle: 'TestTitle'
    },
    mutations: {},
    actions: {},
    
    getters: {
        getTitle(state) {
            return state.currentTitle,
            console.log(state.currentTitle)
        }
    },
}