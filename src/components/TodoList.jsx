import React from 'react';
import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodoList}){
	return(<ul>
		{
			todos.map(todo => <TodoItem key={todo.id} todo={todo} toggleTodoItem={toggleTodoList}/>)
		}
	</ul>);
}; 