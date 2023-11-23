import { useState } from "react";
import "./App.css";
import List from './assets/Components/List/index'

function App() {
  const [message, setMessage] = useState("");
  const [listMessages, setListMessages] = useState([]);

  const handleEnter = (event) => {
    
    if (event.key === "Enter") {
      setListMessages([...listMessages, message]);
      setMessage("");
    }
  };

  function handleClick() {
    
    setListMessages([...listMessages, message]);
    setMessage(""); 
  }
  function removeTodo(index){
    let  newList  = [...listMessages];
    newList.splice(index, 1);
    setListMessages(newList)
}
  return (
    <>
      <div className="todoContainer">
        
        <input 
          type="text" 
          id="text" 
          value={message} 
          onChange={event => setMessage(event.target.value)} 
          onKeyDown={handleEnter} 
        />
        <button onClick={handleClick}>Push me!</button>
        <List messages={listMessages} btn={removeTodo}/>
      </div>
    </>
  );
}

export default App;
