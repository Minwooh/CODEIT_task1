"use client";
import styled from "styled-components";

const ButtonImage = styled.img`
  width: 101px;
  height: 36px;
`;

const Container = styled.div`
  width: 595px;
  background-color: #567;
`;

export const TodoImg = () => {
  return <ButtonImage src="/images/todo.png" alt="todo 이미지" />;
};

export const DoneImg = () => {
  return <ButtonImage src="/images/done.png" alt="done 이미지" />;
};

export const Middle1 = ({ children }) => {
  return <Container>{children}</Container>;
};

export const Middle2 = ({ children }) => {
  return <Container>{children}</Container>;
};
