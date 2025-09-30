import React from "react";
const TodoItem = ({todo,deleteTodo})=>{ return (<div style={{display:"flex",justifyContent:"space-between",margin:"5px 0"}}><span>{todo.title}</span><button onClick={()=>deleteTodo(todo.id)}>Delete</button></div>);};
export default TodoItem;
