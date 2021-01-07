const h = Vue.h

const app = Vue.createApp({
    // template: `
    //     <div class="center card">
    //         <h1>{{ title }}</h1>
    //         <button class="btn" @click="title = 'Изменили!!'">Изменить</button>
    //     </div>
    // `,
    render() {
        return h('div', {
            class: 'card center'
        }, [
            h('h1', {}, this.title),
            h('button', {class: 'btn', onClick: this.changeTitle}, 'Изменить')
        ])
    },
    data: () => ({
        title: 'Vue 3 Example Template'
    }),
    methods: {
        changeTitle() {
            this.title = 'Изменили!!'
        }
    },
})

app.mount('#app')