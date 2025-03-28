import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


export function useIsTodoListEmpty() {
    const todoList = useSelector((state) => state.todos.todos);
    const [isTodoListEmpty, setIsTodoListEmpty] = useState(null);
   
    useEffect(() => {
        todoList.length ? setIsTodoListEmpty(false) : setIsTodoListEmpty(true);
    }, [todoList]);

    return isTodoListEmpty;
}