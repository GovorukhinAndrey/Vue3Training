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

// ======

let title = 'Vue 3';
let message = 'Заголовок это:' + title
//
// console.log(message)
//
// title = 'Angular 10'
//
// console.log(message)
//
const data = {
    title: 'Vue 3',
    message: 'Заголовок это: Vue 3'
}

const proxy = new Proxy(data, {
    // get(target, p) {
    //     console.log(target)
    //     console.log(p)
    // },
    set(target, key, value) {
        if (key === 'title') {
            target.message = 'Заголовок это:' + value
        }

        target[key] = value
    }
})

proxy.title = 'Angular 100'
console.log(proxy)