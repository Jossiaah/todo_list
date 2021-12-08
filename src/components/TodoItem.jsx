import React from 'react';

const TodoItem = (props) => {
    const {inputs, index, list, setList} = props;
    const onClick = () => {
        setList(() => list.filter(task => list.indexOf(task) !== index));
    };

    return (
        <div>
            <div className="list">
                {inputs.name}
                <input type="checkbox" name= ''/>
                <button className='delete-btn' onClick={onClick} >Delete</button>
            </div>
        </div>
    )


}

export default TodoItem;