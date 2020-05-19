export default {
    state: {
        currentTitle: ''
    },
    mutations: {
        setTitle: (state) => {
            state.currentTitle = title;
            console.log('сработала мутация на 1');
        }
    },
    actions: {},
    
    getters: {
        getTitle(state) {
            return state.currentTitle
            //console.log(state.currentTitle)
        }
    },
}