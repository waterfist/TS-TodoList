import React from "react";
import Todo from "./Todo";

type TodosProps = {title : string; contents: string; isDone: boolean; id: string}
interface TodoListProps {
  {isActive: boolean; 
function TodoList({ todos, isActive, setTodos }: TodoListProps) {
  return (
    <>
      <h4>{isActive === true ? "해야 할 것" : "완료된 것"}</h4>
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <Todo item={item} isActive={isActive} setTodos={setTodos}></Todo>
          );
        })}
    </>
  );
}

export default TodoList;
