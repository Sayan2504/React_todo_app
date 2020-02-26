import React, {useState} from 'react';

const Form = ({onSubmit}) => {
    const [text,setText] = useState([]);

    const changeText=(e)=>{
        setText(e.target.value)  
    };

    

    return(
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                onSubmit(text);
                setText("");
            }}>
                <input type="text" value={text} onChange={changeText}/>
                <input type="submit" value="add todo"/>
            </form>
        </div>
    )
}

export default Form