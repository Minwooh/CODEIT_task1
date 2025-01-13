"use client";

import styled from "styled-components";

const InputBox = styled.div`
  background-color: #986;
  position: relative;
  max-width: 1016px;
  min-width: 280px;
  height: 56px;

  margin-right: 20px;
`;

const InputContent = styled.input`
  position: absolute;
  left: 3px;
  border: none;
  background-color: #f1f5f9;
`;

const AddBtn = styled.img``;

export default function InputAddContainer() {
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
        />
      </InputBox>
      <AddBtn
        src="/images/btn/add_large_default.png"
        style={{ width: "168px", height: "56px" }}
      />
    </div>
  );
}
