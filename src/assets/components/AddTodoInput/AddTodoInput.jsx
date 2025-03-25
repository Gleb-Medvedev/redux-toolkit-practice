export default function AddTodoInput({inputValue, handleInputValue}) {
    return (
        <input type="text" value={inputValue} onChange={handleInputValue} />
    )
}