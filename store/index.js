export const state = () => ({
    theme: 'default'
})

export const mutations = {
    toggle (state) {
        if (state.theme == 'default') {
            state.theme = 'dark'
        } else {
            state.theme = 'default'
        }
    }
}