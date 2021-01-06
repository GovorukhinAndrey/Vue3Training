const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholder: 'Введите название заметки',
            inputValue: '',
            notes: ['заметка 1', 'заметка 2'],
        }
    },
    methods: {
        inputChangeHandler(event){
            this.inputValue = event.target.value;
        }
    },
}

Vue.createApp(App).mount('#app')