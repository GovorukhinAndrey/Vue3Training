const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholder: 'Введите название заметки',
            inputValue: '',
            notes: ['заметка 1', 'заметка 2'],
        }
    },
    computed: {
        doubleCount(){
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value){
            if(value.length > 10) {
                this.inputValue = ''
            }
        },
        notes: {
            handler(value) {
                console.log(value)
            },
            immediate: true
        }
    },
    methods: {
        addNote(){
            if(this.inputValue) {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }

        },
        removeNote(idx){
            this.notes.splice(idx,1)
        },
        toUpperCase(str){
            return str.toUpperCase();
        }
    },
}

Vue.createApp(App).mount('#app')