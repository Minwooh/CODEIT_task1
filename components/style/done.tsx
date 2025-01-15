"use client";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;

  width: 568px;
  height: 34px;
  padding: 8px;
  margin-top: 10px;
  gap: 8px;
  border-radius: 27px;
  border: 2px solid #0f172a;
  background-color: #ede9fe;
`;

export default function Done({ value }) {
  return (
    <>
      <Container>
        <img
          src="/images/ic/after_check.png"
          style={{ width: "32px", height: "32px" }}
          alt="체크"
        />
        <div>{value}</div>
      </Container>
    </>
  );
}
