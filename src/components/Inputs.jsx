import React from 'react';

const Inputs = (props) => {
    const {list, setList} = props;
    let inputs = {
        name: '',
        isComplete: false
    }
    const onChange = (e) => {
        inputs.name = e.target.value;
    };

    const onClick = (e) => {
        setList([...list, inputs]);
        e.target.value = '';
        inputs = '';
    }
    return (
        <div className='inputs' >
            <h1  className='heading'>What's the plan for today?</h1>
            <input onChange = {onChange} type="text" name='input'/>
            <button className='add-btn' onClick = {onClick}>Add Todo</button>
            <hr/>

        </div>
    );
}

export default Inputs;