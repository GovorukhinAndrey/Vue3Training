const app = {
    // data() {
    //     return {}
    // },
    // data: () => {
    //     return {}
    // },
    data: () => ({
        title: 'Я есть Грут',
        myHtml: '<h2> Vue 3 App </h2>',
        person: {
            firstName: 'Andrey',
            lastName: 'Govorukhin',
            age: 28
        },
        items: [1,2,3,4,5,6]
    }),
    methods: {
        changeTitle() {
            this.title = 'Другое название'
        }
    }
}
Vue.createApp(app).mount('#app')