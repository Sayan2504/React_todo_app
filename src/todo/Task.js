import React, {useState} from 'react'
import Form from './form'

const Task = ({todo, deleteTodo, editTodo}) =>{
const [isEdit, setIsEdit] = useState(false);

    const handleEdit = (text) =>{
        setIsEdit(false);
        editTodo(todo.id, text);
    };

    return(
        <div>
            {isEdit ? (
                <Form onSubmit={handleEdit} value={todo.task} buttonText="Update"/>   
            ) : (
                <p>
                    {todo.task}
                    <button onClick={() =>{
                        setIsEdit(true);
                    }}>
                    Edit
                    </button>

                    <button onClick={() =>{
                        deleteTodo(todo.id)}
                    }>
                        Delete
                    </button>
                </p>
            )
            }
        </div>
    );
}

export default Task