import { createContext,useContext } from "react";

// object-> array-> object
// object->array,methods
export const TodoContext=createContext({
          Todos: [
                   {
                    id:1,
                    // todo is key for message
                    todo:"hellow world",
                    completed:false
                   } 
          ],
          addTodo:(todo)=>{},
          updateTodo:(id,todo)=>{},
          deleteTodo:(id)=>{},
          toggleComplete:(id)=>{}
})

// creating custom hook
export const useTodo=()=>{
   return  useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider