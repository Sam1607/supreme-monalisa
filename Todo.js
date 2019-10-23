import React from 'react';

const Todo = ({data,deleteData}) => {

  const todoList = data.length ?
  (
    data.map(todo => {
      return(
        <div className = "collection-item" key = {todo.id}>
          <span>{todo.id}. {todo.name}  {todo.email} {' '}
          <button className = "btn btn-danger" onClick={() => {deleteData(todo.id)}}>delete </button>{' '}
          </span>
        </div>

      )
    })
  ):(
      <h1 className="btn btn-primary">You have deleted All the columns kindly Add something..</h1>
  )
  return(
    <div className= "todos collection">
      {todoList}
    </div>
  )

}

export default Todo;
