"use client";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 996px;
  height: 64px;
  margin-top: 10px;
  gap: 10px;

  border-radius: 27px;
  border: 2px solid #0f172a;
  background-color: rgba(255, 2555, 255, 1);
`;

export default function ToDoLarge({ value }) {
  return (
    <>
      <Container>
        <img
          src="/images/ic/before_check.png"
          style={{ width: "32px", height: "32px" }}
          alt="체크"
        />
        <div>{value}</div>
      </Container>
    </>
  );
}
