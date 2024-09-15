import { useState } from 'react'
import { TodoProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
const [Todos,setTodos]=useState([])

const addTodo=(todo)=>{
  // add only id with given value and completed false, along with previous value
  setTodos((prev)=> [{id:Date.now(),...todo},...prev])
}

// const updateTodo=(id,todo)=>{
//   // first access all values and the map each todo with given id
//   setTodos((prevTodos)=> prevTodos.map((eachTodo)=> (eachTodo.id === id ? todo: prevTodos)))
// }

const updateTodo = (id, updatedTodo) => {
  // Create a new array by mapping over Todos and update the specific todo
  const newTodos = Todos.map((eachTodo) =>
    eachTodo.id === id ? updatedTodo : eachTodo
  );
  // Set the new todos state
  setTodos(newTodos);
};
const deleteTodo = (id) => {
  // Filter the todos and return only the ones that don't match the given id
  const remainingTodos = Todos.filter((todo) => todo.id !== id);
  // Update the state with the remaining todos
  setTodos(remainingTodos);

  // or
  // setTodos((prev) => prev.filter((todo) => todo.id !== id))
};

// toggle if true-> make false and vice versa
const toggleComplete=(id)=>{
 const todos= Todos.map((eachTodo)=>
   (eachTodo.id === id ? 
  {...eachTodo,completed:!eachTodo.completed}: eachTodo))
 setTodos(todos)

//  inside setTodo all todo is stored

//  setTodos((prevTodos) =>
//   prevTodos.map((todo) =>
//     todo.id === id ? { ...todo, completed: !todo.completed } : todo
//   )
// );

}

  return (
    <TodoProvider value={{Todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                   {Todos.map((todo)=> (
                      <div 
                      key={todo.id}
                      className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        <TodoItem todo={todo}/>
                    </div>
                   ))}

                    

                </div>
            </div>
    </TodoProvider>
  )
}

export default App
