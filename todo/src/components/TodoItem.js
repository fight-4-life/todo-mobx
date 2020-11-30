import React from "react";
import {observer} from "mobx-react";

export const TodoItem = observer(({todo}) => {
    const rename_message = 'Изменить название'

    const onToggleCompleted = () => {
        todo.completed = !todo.completed;
    }

    const onRename = () => {
        todo.task = prompt(rename_message, todo.task) || todo.task;
    }

    return (
        <li onDoubleClick={onRename}>
            <input
                type='checkbox'
                checked={todo.completed}
                onChange={onToggleCompleted}
            />
            {todo.task}
            {todo.assignee
                ? <small>{todo.assignee.name}</small>
                : null
            }
        </li>
    );
})