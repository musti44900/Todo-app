import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => { const res = await axios.get("http://localhost:8080/api/todos"); setTodos(res.data); }
  const addTodo = async (title) => { const res = await axios.post("http://localhost:8080/api/todos",{title,completed:false}); setTodos([...todos,res.data]); }
  const deleteTodo = async (id) => { await axios.delete(`http://localhost:8080/api/todos/${id}`); setTodos(todos.filter(todo=>todo.id!==id)); }
  useEffect(()=>{fetchTodos();},[]);
  return (<div><h1>Todo App</h1><TodoForm addTodo={addTodo}/>{todos.map(todo=><TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>)} </div>);
};
export default TodoList;
