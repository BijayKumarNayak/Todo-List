import React from "react";
import { useState } from "react";
// import { ReactDOM } from "react";
import "./todo.css";
import Button from "@mui/material/Button";

function Todo() {
  const [todos, setTodos] = useState("");
  const [items, setItems] = useState([]);

  const additem = () => {
    if (todos.length===0){
      alert(" opps! please Enter todo")
      
    }
  
    
   else setItems((oldvalue) => {
      return [...oldvalue, todos];
    });
   setTodos("")
   
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
    <div id="todo">
      <i>
        <h2>Todo List</h2>
      </i>
      <form>
        <input
          type="text"
          placeholder="Enter Todo"
          value={todos}
          onChange={(e) => setTodos(e.target.value)}
          required
        />

        <Button className="btn" variant="contained" onClick={additem}>
          Add
        </Button>
      </form>
      <div id="output">
        <ul >
          {items.map((item, ind) => {
            return (
              <div className="render">
                <li key={ind}>
                  {item}
                </li>
                <Button
                  variant="contained"
                  color="error"
                  
                  className="btn"
                  onClick={() => remove(ind)}
                >
                  Remove
                </Button>
                </div>
             
             
          );
        })}
      </ul>
    </div>
    </div>
  );
}

export default Todo;
