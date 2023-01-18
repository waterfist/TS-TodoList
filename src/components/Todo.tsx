import React, { Dispatch, SetStateAction } from "react";

type TodosItemProps = {
  title: string;
  contents: string;
  isDone: boolean;
  id: string;
};
interface TodoListProps {
  isActive: boolean;
  item: TodosItemProps;
  setTodos: Dispatch<SetStateAction<TodosItemProps[]>>;
}
function Todo({ item, isActive, setTodos }: TodoListProps) {
  const handleDeleteButtonClick = () => {
    setTodos((prev) => prev.filter((t) => t.id !== item.id));
  };

  const handleSwitchButtonClick = () => {
    setTodos((prev: TodosItemProps[]) =>
      prev.map((t: TodosItemProps) => {
        if (t.id === item.id) {
          return { ...t, isDone: !t.isDone };
        } else {
          return t;
        }
      })
    );
  };
  return (
    <div
      style={{
        border: "1px solid black",
      }}
      key={item.id}
    >
      <h5>{item.title}</h5>
      <p>{item.contents}</p>
      <button onClick={handleSwitchButtonClick}>
        {isActive ? "완료" : "취소"}
      </button>
      <button onClick={handleDeleteButtonClick}>삭제</button>
    </div>
  );
}

export default Todo;
