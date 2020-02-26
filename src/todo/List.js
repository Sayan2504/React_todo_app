import React from 'react';

const List = ({todo}) => {
    const list = 
        todo && todo.map(item => (
            <li key={item.id}>
                {item.task}
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