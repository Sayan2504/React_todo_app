import React, {useState, useEffect} from 'react';

const Form = ({onSubmit, value, buttonText}) => {
    const [text,setText] = useState([]);

    const changeText=(e)=>{
        setText(e.target.value)  
    };

    useEffect(() => {
        if (value) {
          setText(value);
        }
      }, [value]);
    

    return(
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                onSubmit(text);
                setText("");
            }}>
                <input type="text" value={text} onChange={changeText}/>
                <input type="submit" value={buttonText || "Add Todo"}/>
            </form>
        </div>
    )
}

export default Form