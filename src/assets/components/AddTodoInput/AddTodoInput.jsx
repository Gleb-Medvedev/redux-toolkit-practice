import { memo } from "react";

const AddTodoInput = memo(({inputValue, handleInputValue}) => {
    console.log('render INPUT');
    return (
        <input type="text" value={inputValue} onChange={handleInputValue} />
    )
})

export default AddTodoInput;