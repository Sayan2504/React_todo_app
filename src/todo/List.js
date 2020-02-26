import React from 'react';
import Task from './Task'

const List = ({todo, deleteTodo, editTodo}) => {
    const list = 
        todo && todo.map(item => (
            <li key={item.id}>
                <Task
                    key={item.id}
                    todo={item}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                />
            </li>
    ));
    return(
        <div>
            <h3>Tasks</h3>
            <ul>{list}</ul>
        </div>
    );
};

export default List