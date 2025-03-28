import { memo } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";

const TodoList = memo(() => {
    const todos = useSelector((state) => state.todos.todos);
    console.log('render TODO-LIST');

    return (        
        <ul>
            {
                todos.map(todo => <TodoItem key={todo.id} id={todo.id} todoText={todo.todoText} />)
            }
        </ul>
    )
})

export default TodoList;