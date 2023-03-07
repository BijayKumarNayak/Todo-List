import React from "react";
import { useState } from "react";
// import { ReactDOM } from "react";
import "./todo.css";


function Todo() {
  const [todos, setTodos] = useState("");
  const [items, setItems] = useState([]);

  const additem = () => {
    if (todos.length === 0) {
      alert(" opps! please Enter todo");
    } else
      setItems((oldvalue) => {
        return [...oldvalue, todos];
      });
    setTodos("");
  };
  const remove = (id) => {
    console.log("removed");
    setItems((oldvalue) => {
      return oldvalue.filter((arrElm, ind) => {
        return id !== ind;
      });
    });
  };

  return (
    <div id="main">
    
      <div id="todo">
       <h1>Todo List</h1>
        <form>
          <input
            type="text"
            placeholder="Enter Todo"
            value={todos}
            onChange={(e) => setTodos(e.target.value)}
            required
          />

          
          <button onClick={additem} className="addbtn">Add</button>
        </form>
        <div id="output">
          <ul>
            {items.map((item, ind) => {
              return (
                <div className="render">
                  <li key={ind}>{item}</li>
                 <button className="removebtn" onClick={() => remove(ind)}>Remove</button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
