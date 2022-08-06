import './App.css';
import { useState } from 'react'

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')

  function deleteTodo(id) {
    const updatedToDos = [...toDos].filter(toDos => toDos.id !== id)
    setToDos(updatedToDos)
  }


  return (
    <div className="app">
      <div className="mainHeading">
        <h1>TODo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>You Can...... Do it🌝 ☕</h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => { setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]) }} className="fas fa-plus"></i>
      </div>

      
      <div className="todos">
    
        {toDos.map((obj) => {
          return (<div className="todo">

            <div className="left">
           
              <input onChange={(e) => {
                console.log(e.target.checked);
                console.log(obj);


                setToDos(toDos.filter(obj1 => {
                  if (obj1.id === obj.id) {
                    obj1.status = e.target.checked

                  }
                  return obj1

                }))


              }}

                value={obj.status} type="checkbox" name="" id="" />
              

              <p>{obj.text}</p>
            </div>

            <div className="right">

              <i onClick={() => deleteTodo(obj.id)} className="fas fa-times"></i>
            </div>

          </div>)
        })}
  <h2>Finished Tasks</h2>

        {toDos.map((obj) => {
          if (obj.status) {
            return (<h1>{obj.text}</h1>)
          }
          return null

        })}

      </div>

    </div>
  );
}

export default App;
