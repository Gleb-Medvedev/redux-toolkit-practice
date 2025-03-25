import AddTodoInput from './assets/components/AddTodoInput/AddTodoInput';
import TodoList from './assets/components/TodoList/TodoList';
import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { addTodo } from './assets/store/todoSlice'

function App() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    if (inputValue && inputValue.length > 2) {
      dispatch(addTodo({todoText: inputValue}));
      setInputValue('');
    }
  }

  return (
    <>
      <AddTodoInput inputValue={inputValue} handleInputValue={(e) => setInputValue(e.target.value)} />
      <button type="button" onClick={addTask} >Добавить дело</button>
      <TodoList />
    </>
    
  )
}

export default App