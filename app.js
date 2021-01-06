const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholder: 'Введите название заметки',
        }
    }
}

Vue.createApp(App).mount('#app')