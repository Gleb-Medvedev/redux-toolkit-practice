import { useDispatch } from "react-redux";
import { removeTodo } from '../../store/todoSlice';

export default function TodoItem({id, todoText}) {
    const dispatch = useDispatch();

    const removeTask = () => {
        dispatch(removeTodo({id: id}));
    }

    console.log('render TODO-ITEM');

    return (
        <li className="todo-list__item">
            <span className="todo-list__text">
                { todoText }
            </span>
            <button type="button" onClick={removeTask}>удалить дело</button>
        </li>
    )
}