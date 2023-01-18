import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Input({ setTodos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleSubmitClick = (event) => {
    event.preventDefault();

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

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
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
