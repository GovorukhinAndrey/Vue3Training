const app = Vue.createApp({
    template: `
        <div class="center card">
            <h1>{{ title }}</h1>
            <button class="btn" @click="title = 'Изменили!!'">Изменить</button>
        </div>
    `,
    data: () => ({
        title: 'Vue 3 Example Template'
    })
})

app.mount('#app')