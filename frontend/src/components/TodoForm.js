import React,{useState} from "react";
const TodoForm=({addTodo})=>{ const [title,setTitle]=useState(""); const handleSubmit=(e)=>{ e.preventDefault(); if(!title) return; addTodo(title); setTitle("");}; return (<form onSubmit={handleSubmit}><input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Add todo"/><button type="submit">Add</button></form>);};
export default TodoForm;
