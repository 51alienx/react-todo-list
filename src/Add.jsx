import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

export const Add = ({ Newitem, SetNewitem, adding }) => {

  const refo=useRef()

  return (
    <form className="addForm" onSubmit={adding}>
      <label htmlFor="additem">add</label>
      <input
        autoFocus
        ref={refo}
        type="text"
        id="additem"
        placeholder="additem"
        required
        value={Newitem}
        onChange={(e)=>SetNewitem(e.target.value)}
        
      />
      <button type="submit" onClick={()=>{refo.current.focus()}}>
        <FaPlus />
      </button>
    </form>
  );
};
