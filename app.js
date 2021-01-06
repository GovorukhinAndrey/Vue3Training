const app = {
    // data() {
    //     return {}
    // },
    // data: () => {
    //     return {}
    // },
    data: () => ({
        title: 'Я есть Грут',
    }),
    methods: {
        changeTitle() {
            this.title = 'Другое название'
        }
    }
}
Vue.createApp(app).mount('#app')