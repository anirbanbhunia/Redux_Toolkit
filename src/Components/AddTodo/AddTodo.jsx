import { useState } from "react"
function AddTodo({addTodo}){
    const[inputText,setInputText] = useState('')

    return(
        <form onSubmit={(e) => e.preventDefault()}>
        <input type="text"
        placeholder="add your todo..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={() =>(
            inputText&&addTodo({todoText:inputText}),
            setInputText('')
        )}>Add</button>
        </form>
    )
}
export default AddTodo