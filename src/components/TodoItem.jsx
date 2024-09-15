import React, { useState } from 'react'
import {useTodo} from '../contexts/TodoContext'

export default function TodoItem({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    // value of one todo
    const[todoValue,setTodoValue]=useState(todo.todo)

    const{updateTodo,deleteTodo,toggleComplete}=useTodo()

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoValue})
        setIsTodoEditable(false)
      }
      const toggleCompleted = () => {
        //console.log(todo.id);
        toggleComplete(todo.id)
      }
    
  return (
   <>
   <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black
   ${todo.completed? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}
     `}>
        {/* input field for read only */}
            <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={toggleCompleted}
          />
          {/* input field for whole one todo item */}
           <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } 
              ${todo.completed ? "line-through" : ""}`}
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
              readOnly={!isTodoEditable}
          />
    <button
    className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
    onClick={()=>{
        // don't give option to edit or save ,it's already saved
        if (todo.completed) return
        if (isTodoEditable) {
            editTodo();
        }
         else 
        // make toggle to editable if isTodoEditable is false
        setIsTodoEditable((prev) => !prev);
    }}
    // disbaled true if completed -> make disable if completed
     disabled={todo.completed}
    >

        {/* give option to edit if it is editable */}
        {isTodoEditable? "📁":"✏️"}
    </button>


  {/* Delete Todo Button */}
  <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>

   </div>
   </>
  )
}
