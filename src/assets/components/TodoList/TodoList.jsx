import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
    const todos = useSelector((state) => state.todos);
    // console.log(todos);

    return (
        <ul>
            {
                todos.map(todo => <TodoItem key={todo.id} id={todo.id} todoText={todo.todoText} />)
            }
        </ul>
    )
}