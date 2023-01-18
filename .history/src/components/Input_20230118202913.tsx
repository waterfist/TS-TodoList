import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import React, { Dispatch, SetStateAction } from "react";

type TodosItemProps = {
  title: string;
  contents: string;
  isDone: boolean;
  id: string;
};
interface TodoListProps {
  setTodos: Dispatch<SetStateAction<TodosItemProps[]>>;
}

function Input({ setTodos }: TodoListProps) {
  const [title, setTitle] = useState<string>();
  const [contents, setContents] = useState<string>();

  const handleSubmitClick = (e: FormEvent) => {
    e.preventDefault();

    const newTodo = {
      title: title,
      contents: contents,
      isDone: false,
      id: uuidv4(),
    };
    // console.log("here!");
    // 지금 세팅된 title과 contents를 todos에 넣어주는 작업!
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentsChange = (event) => {
    setContents(event.target.value);
  };

  return (
    <section>
      <form onSubmit={handleSubmitClick}>
        제목: <input value={title} onChange={handleTitleChange} />
        내용: <input value={contents} onChange={handleContentsChange} />
        <button>추가</button>
      </form>
    </section>
  );
}

export default Input;
