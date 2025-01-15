"use client";
import styled from "styled-components";
import { useRouter } from "next/navigation";

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
  background-color: rgba(255, 2555, 255, 1);
`;

export default function ToDo({ value, onMarkDone }) {
  const router = useRouter();

  const goParticularPage = () => {
    router.push(`/items?value=${encodeURIComponent(value)}`);
  };
  return (
    <>
      <Container>
        <img
          src="/images/ic/before_check.png"
          style={{ width: "32px", height: "32px" }}
          alt="체크"
          onClick={() => onMarkDone(value)}
        />
        <div onClick={goParticularPage} style={{ backgroundColor: "#904" }}>
          {value}
        </div>
      </Container>
    </>
  );
}
