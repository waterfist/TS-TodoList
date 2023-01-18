import React from "react";
import Todo from "./Todo";
function TodoList({ todos, isActive, setTodos }) {
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
