import React, { useState } from 'react'
import { useAddTodoMutation, 
    // useDeleteTodoMutation, 
    useGetTodosQuery, useUpdateTodoMutation } from '../features/todos/todosSlice'

const TodoList = () => {
    const { data, isLoading, isError, isSuccess
        // error, isFetching, isUninitialized 
    } = useGetTodosQuery()

    console.log(data, "data")
    const [addTodo] = useAddTodoMutation()
    const [updateTodo] = useUpdateTodoMutation()
    // const [deleteTodo] = useDeleteTodoMutation()


    const [newTodo, setNewTodo] = useState('')  

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // addTodo
        addTodo({
            userId: 1,
            title: newTodo, 
            completed: false
        })
        setNewTodo('')
    }
    
    const newItemSelction =
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">Enter a new todo item</label>
            <div className="new-todo">
                <input type="text" value={newTodo} id='new-todo' placeholder='Enter new todo' onChange={e => setNewTodo(e.target.value)} />
            </div>
            <button className="submit">Submit</button>
        </form>

    let content; 
    if(isLoading) {
        content = <p>Loading...</p>
    } else  if(isSuccess) {
        content = data.map(todo => { //JSON.stringify(data)
            return (
                <article key={todo.id}>
                    <div className="todo">
                        <input type="checkboc" 
                        checked={todo.completed}
                        onChange={() => updateTodo({...todo, completed: !todo.completed})}
                        />
                        Title:
                        {/* <label htmlFor={todo.id.toString()}>title: {todo.title}</label> */}
                    </div>
                    {/* <button className='trash' onClick={() => deleteTodo({id: todo.id})}>
                        <div style={{background: "red", width: '20px', height:'20px'}}></div>
                    </button> */}
                </article>
            )
        }) 
    } else if (isError) {
        // content = <p>{error}</p>
    }
    return (
        <main>
            <h1>Todo List</h1>
            {newItemSelction}
        </main>
    )
}

export default TodoList