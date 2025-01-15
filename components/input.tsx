"use client";

import styled from "styled-components";
import { useState } from "react";

const InputBox = styled.div`
  background-color: #986;
  position: relative;
  max-width: 1016px;
  min-width: 280px;
  height: 56px;

  margin-right: 22px;
`;

const InputContent = styled.input`
  position: absolute;
  width: 90%;
  left: 2%;
  top: 18px;
  border: none;
  outline: none;
  background-color: #f1f5f9;
`;

const AddBtn = styled.img`
  width: 168px;
  height: 56px;
`;
interface InputAddContainerProps {
  handleSubmit: (name: string) => void; // 부모에서 전달받은 handleSubmit 함수
}

export default function InputAddContainer({
  handleSubmit,
}: InputAddContainerProps) {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      handleSubmit(inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <InputBox>
        {" "}
        <img
          src="/images/search@3x.png"
          alt="입력 창"
          style={{ width: "100%", height: "56px" }}
        />
        <InputContent
          type="text"
          name="todo"
          placeholder="할 일을 입력해주세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </InputBox>
      <AddBtn src="/images/btn/add_large_default.png" onClick={handleAdd} />
    </div>
  );
}
