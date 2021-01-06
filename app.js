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
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    },
    methods: {
        changeTitle() {
            this.title = 'Другое название'
        },
        addItem(event) {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
            console.log(event.key)
        }
    }
}
Vue.createApp(app).mount('#app')