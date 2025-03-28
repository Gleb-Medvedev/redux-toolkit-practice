import AddTodoInput from './assets/components/AddTodoInput/AddTodoInput';
import TodoList from './assets/components/TodoList/TodoList';
import { useDispatch } from 'react-redux';
import { memo, useCallback, useState } from 'react'
import { addTodo } from './assets/store/todoSlice'
import { useIsTodoListEmpty } from './assets/hooks/useIsTodoListEmpty';
import RTKTodoList from './assets/components/RTKTodoList/RtkTodoList';

const App = memo(() => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const todoListChecker = useIsTodoListEmpty();

  console.log('APP rendered');
  
  const addTask = () => {
    if (inputValue && inputValue.length > 2) {
      dispatch(addTodo({todoText: inputValue}));
      setInputValue('');
    }
  }

  const handleInputValue = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  return (
    <>
      <AddTodoInput inputValue={inputValue} handleInputValue={handleInputValue} />
      <button type="button" onClick={addTask}>Добавить дело</button>
      <TodoList />
      <div className="check">
        { todoListChecker ? 'список дел пуст' : 'в списке есть дела!' }
      </div>
      <RTKTodoList />
    </>    
  )
})

export default App