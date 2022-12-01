import React from 'react'
import TodoClass from '../components/todo/TodoClass'
import TodoFunct from '../components/todo/TodoFunct'

export const ReduxTodo = () => {
  return (
    <div className='container'>
      <div className="row md-2">
        <div className="col-6">
          <TodoClass />
        </div>
        <div className="col-6">
          <TodoFunct />
        </div>
      </div>
    </div>
  )
}
