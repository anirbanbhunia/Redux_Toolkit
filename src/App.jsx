import { bindActionCreators } from "redux"
import AddTodo from "./Components/AddTodo/AddTodo"
import TodoList from "./Components/TodoList/TodoList"
import { useDispatch } from "react-redux"
import todoReducer,{addTodo,deleteTodo,editTodo,finishedTodo} from "./slices/todoSlice"

function App() {
//   const [list,setList] = useState([
//     {id:1,todoData:"todo1",finished:false},
//     {id:2,todoData:"todo2",finished:true}
// ])
const dispatch = useDispatch()
const actions = bindActionCreators({addTodo,deleteTodo,editTodo,finishedTodo},dispatch)

  return (
      <div>
        <AddTodo addTodo={actions.addTodo}/>
        <TodoList todoDelete={actions.deleteTodo} todoEdit={actions.editTodo} todoFinished={actions.finishedTodo}/>
      </div>
  )
}


export default App
