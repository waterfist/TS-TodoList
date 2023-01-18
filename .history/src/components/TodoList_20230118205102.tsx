import Todo from "./Todo";
import React, { Dispatch, SetStateAction } from "react";

type TodosItemProps = {
  title: string;
  contents: string;
  isDone: boolean;
  id: string;
};
interface TodoListProps {
  isActive: boolean;
  todos: TodosItemProps[];
  setTodos: Dispatch<SetStateAction<TodosItemProps[]>>;
  tf: (x: TodosItemProps) => void;
}
function TodoList({ todos, isActive, setTodos, tf }: TodoListProps) {
  return (
    <>
      <h4>{isActive === true ? "해야 할 것" : "완료된 것"}</h4>
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <Todo
              item={item}
              isActive={isActive}
              setTodos={setTodos}
              tf={tf}
            ></Todo>
          );
        })}
    </>
  );
}

export default TodoList;
