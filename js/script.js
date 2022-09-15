
const todos = [
    {
        text: 'fare i compiti',
        done: false
    },

    {
        text: 'fare i compiti',
        done: true
    },

    {
        text: 'fare i compiti',
        done: false
    }
]

const app = new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todos
    },
    methods: {
        ToggleTodo(todo) {
            console.log(todo.text)
            todo.done = !todo.done;
        },
        deleteTodo(i) {
            const begin = this.todos.slice(0, i);
            const end = this.todos.slice(i + 1);
            this.todos = [...begin, ...end];
        },
        addTodo() {
            const newToo = {
                text: tjos.newTodo,
                done: false
            }
            this.todos.push();
            this.newTodo = '';
        }
    }
});

