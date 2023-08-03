import React, { useState } from "react";
import "./List.css";
import TextField from '@mui/material/TextField';
import DeleteIcon from "@mui/icons-material/Delete";
import QueueIcon from '@mui/icons-material/Queue';
import Button from '@mui/material/Button';

export default function TodoBox() {
  const [mytodo, setMyTodo] = useState("");
  const [listitem, setListItem] = useState([]);

   const createList = () => {
    if(mytodo!=""){
      setListItem((oldList) => {
        return [...oldList, mytodo];
      });
    }
    else{
      alert("Enter Todo item")
    }
    setMyTodo("");
  };


  const delList = (idx, todoval) => {
   setListItem((oldList) => {
     return oldList.filter((arr, idx) => {
       return idx !== todoval;
       
     });
   }
   );
   
 };

 const delAll = () => {
  setListItem([]) 
  
};


  return (
    <div>
      <TextField
        label="Enter Todo Work"
        style={{ color:"white" }}      
        value={mytodo}
        onChange={(event) => setMyTodo(event.target.value)}
      ></TextField>


<ul className="allList">
        {listitem && listitem.map((todoval, idx) => (
          
              <li className="singleTodo" key={todoval.id} id={idx}>
                <span className="todoText">{todoval}</span>
                <button
                  style={{
                   backgroundColor: "transparent",
                   border: " #3498db",
                  }}
                  onClick={() => delList(todoval,idx)}
                >
                  <DeleteIcon
                    style={{
                      color: "red",
                      display: "flex",
                    }}
                    
                  ></DeleteIcon>
                </button>
              </li>
        )
        )}
      </ul>
      <div className="baction">
        <Button
         
          variant="contained"
          className="button del"
          startIcon={<DeleteIcon />}
          onClick={delAll}
        >
          Delete All
        </Button>

        <Button
          variant="contained"
          className="button"
          startIcon={<QueueIcon />}
          onClick={createList}
        >
          ADD List
        </Button>
      </div>
    </div>
  );
}
