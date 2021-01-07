// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
  data: () => ({
    activeIndex: 0, // то, что позволяет определить текущий активный шаг
    isFinished: false,
    steps: [
      {title: 'Основы', text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'},
      {title: 'Компоненты', text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'},
      {title: 'Роутер', text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'},
      {title: 'Vuex', text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'},
      {title: 'Composition', text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'},
    ]
  }),
  computed: {
    currentText() {
      return this.steps[this.activeIndex].text
    },
    isLastStep() {
      return this.activeIndex === this.steps.length - 1
    },
    isFirstStep() {
      return this.activeIndex === 0
    },
    textBtnNext() {
      return this.isLastStep ? 'Закончить' : 'Вперед'
    },
    textBtnPrev() {
      return this.isFinished ? 'Начать заного' : 'Назад'
    },
  },
  methods: {
    /**
     * Устанавливает класс для кнопки шага
     * @param {Number} idx - индекс кнпоки
     * @returns {String}
     */
    setClassForStep(idx) {
      return this.activeIndex === idx ? 'active' : this.activeIndex > idx ? 'done' : ''
    },
    /**
     * Действие нажатия кнопки назад
     */
    prev() {
      if (this.isFinished) {
        this.reset()
      } else if (this.activeIndex > 0) {
        this.activeIndex -= 1
      }
    },
    /**
     * Сброс к началу
     */
    reset() {
      this.isFinished = false
      this.activeIndex = 0
    },
    /**
     * Кнопка вперед или закончить
     */
    nextOfFinish() {
      if (this.isLastStep) {
        this.isFinished = true
      } else {
        this.activeIndex += 1
      }
    },
    /**
     * Установить активным шаг
     * @param {Number} idx - индекс кнпоки
     */
    setActive(idx) {
      this.activeIndex = idx
    }
  }
}

Vue.createApp(App).mount('#app')