import { useGetTodosQuery } from "../../api/apiSlice";
import { memo } from "react";

const RTKTodoList = memo(
    () => {
        const {data: todos, err, isLoading } = useGetTodosQuery();
        
        if (isLoading) {
            return <div className="loading" style={{padding: '40px', backgroundColor: 'yellow'}}>Loading...</div>
        }
    
        if (err) {
            return <div className="err-block" style={{padding: '40px', backgroundColor: 'red'}}>Ошибка ${err.message}</div>
        }
        
        return (
            <ul>
                {
                    todos.map(todo => {
                        return <li key={todo.id} style={{padding: '10px 20px', marginBottom: '12px', border: '1px solid blue'}}>{ todo.title }</li>
                    })
                }
            </ul>
        )
    }
)

export default RTKTodoList;