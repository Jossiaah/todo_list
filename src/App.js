import React, {useState} from 'react';
import './App.css';
import Inputs from './components/Inputs';
import TodoItem from './components/TodoItem'

function App() {

  const [list, setList] = useState([]);

  return (
    <div className="App">
      <Inputs list={list} setList={setList}/>
      {list.map((task, i) => (
        <TodoItem inputs ={task} setList= {setList} index = {i} list={list} />
      ))}
    </div>
  );
}

export default App;
