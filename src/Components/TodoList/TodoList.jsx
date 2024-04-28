import { useSelector } from "react-redux"
import Todo from "../Todo/Todo"
import React from "react"

function TodoList({todoDelete,todoEdit,todoFinished}){
      const list = useSelector((state) => state.todo.todoList) 
      //how we know state.todo? key name is todo in store reducer so it is state.todo
      //const reducer = combineReducers({todo:todoReducer})
      console.log(list)

      function onFinished(chekedVal,e){
        todoFinished({checkVal:chekedVal,todo:e})
      }
      function onDelete(e){
        todoDelete({todo:e})
      }
      function onEdit(todotext,e){
       todoEdit({todo:e,todoText:todotext})
      }

    return(
        <div>
            {list.length > 0 && list.map(e => <Todo key={e.id} todoData={e.todoData} isFinished={e.finished} id={e.id} changeFinished={(chekedVal) => onFinished(chekedVal,e)}
        onDelete = {() => onDelete(e)}
        onEdit = {(todotext) => onEdit(todotext,e)}
        />
        )}
        </div>
    )
}
export default TodoList