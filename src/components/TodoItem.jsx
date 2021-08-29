import React from 'react';

export function TodoItem({ todo, toggleTodoItem }){
	const {id, task, completed} = todo

	const handleTodoClick = () =>{
		toggleTodoItem(id);
	}

	return(<li>
		<input type="checkbox" checked= {completed} onChange={handleTodoClick}/>
		{task}
	</li>);
};