import React from 'react';

const List = ({todo, deleteTodo}) => {
    const list = 
        todo && todo.map(item => (
            <li key={item.id}>
                {item.task}
                
                <button onClick={() =>
                {deleteTodo(item.id)}}>
                    Delete
                </button>
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