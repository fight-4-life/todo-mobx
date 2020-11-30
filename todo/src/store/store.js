import {action, computed, makeObservable, observable} from "mobx";

const no_tasks_message = "Нет заданий"
const next_task_message = "нужно выбрать"

class TodoStore {
    todos = [];

    constructor() {
        makeObservable(this, {
            todos: observable,
            completedTodosCount: computed,
            report: computed,
            addTodo: action,
        });
    }

    get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }

    get report() {
        if (this.todos.length === 0)
            return no_tasks_message;
        const nextTodo = this.todos.find(todo => todo.completed === false);
        return `Следующее задание ${nextTodo ? nextTodo.task : next_task_message}. ` +
            `В процессе: ${this.completedTodosCount}/${this.todos.length}`;
    }

    addTodo(task) {
        this.todos.push({
            task: task,
            completed: false,
            assignee: null,
        });
    }
}

export const todoStore = new TodoStore();
