import {observer} from "mobx-react";
import React, {useState} from "react";
import {TodoItem} from "./TodoItem";

export const TodoList = observer(({store}) => {
    const [text, setText] = useState('')
    const [value, setValue] = useState('')

    const onNewTodo = () => {
        store.addTodo(text);
        setValue('')
        setText('')
    }
    const onTextChange = (e) => {
        setText(e.target.value)
        setValue(e.target.value)
    }

    return (
        <div>
            {store.report}
            <ul>
                {store.todos.map(
                    (todo, idx) => <TodoItem todo={todo} key={idx}/>
                )}
            </ul>
            <div>
                <input
                    value={value}
                    onChange={onTextChange}
                />
            </div>
            <div>
                <button onClick={onNewTodo}>Новое задание</button>
            </div>
            <small> (двойной клик, чтобы изменить задание)</small>
        </div>
    );
})