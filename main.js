Vue.component('task-list', {
    template: '<div><task v-for="task in tasks">{{ task.task }}</task></div>',

    data() {
        return {
            tasks: [
                { task: 'Go to the Store', completed: true },
                { task: 'Go to the email', completed: false },
                { task: 'Go to the farm', completed: true },
                { task: 'Go to the work', completed: false },
            ]
        };
    },

    methods: {

    }
});


Vue.component('task', {
    template: '<li><slot></slot></li>'

});

new Vue({
    el: '#root'
});