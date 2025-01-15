"use client";
import styled from "styled-components";
import Navigation from "../../components/navigation";
import ToDoLarge from "../../components/style/todoLarge";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const Imgcontainer = styled.div<{ backgroundImageUrl: string }>`
  position: relative;
  background-color: #f8fafc;
  width: 384px;
  height: 311px;
  gap: 0px;
  border-radius: 24px;
  background-image: url(${(props) => props.backgroundImageUrl});
  border: ${(props) =>
    props.backgroundimageurl ? "none" : "2px dashed rgba(203, 213, 225, 1)"};
`;

const AddBtn = styled.img`
  position: absolute;
  bottom: 10px; /* 아래쪽 10px에 위치 */
  right: 10px; /* 오른쪽 10px에 위치 */
  width: 64px;
  height: 64px;
`;

const MemoContainer = styled.div`
  width: 588px;
  height: 311px;
  border-radius: 24px;
  padding: 30px 18px;
  text-align: center;
  background-image: url("/images/memo.png"); /* 이미지 경로 */
  background-size: cover; /* 배경 이미지 크기 조정 */
  background-position: center; /* 배경 이미지 위치 */
  background-repeat: no-repeat; /* 이미지 반복 여부 */
`;

const BtnContainer = styled.div`
  background-color: #789;
  margin-left: 640px;
  height: 56px;
`;

const Btn = styled.img`
  margin-left: 10px;
  width: 168px;
  height: 100%;
`;

export default function Items() {
  const searchParams = useSearchParams();
  const value = searchParams.get("value"); // URL 쿼리에서 value를 가져옴

  const [image, setImage] = useState<string | null>(null); // 이미지 상태 관리

  // 이미지 파일을 선택할 때 호출되는 함수
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // 선택된 파일을 URL로 변환
      setImage(imageUrl); // 상태에 저장
    }
  };

  return (
    <div
      id="background"
      style={{
        backgroundColor: "#F9FA08",
        height: "100vh", // 화면 높이에 맞게 설정
        width: "100vw",
        overflow: "hidden",
        display: "flex", // 중앙 정렬을 위한 플렉스 박스
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Navigation />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          backgroundColor: "#f9f",
          width: "1200px",
          height: "1020px",
        }}
      >
        <ToDoLarge value={value} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            backgroundColor: "#267",
            width: "100%",
          }}
        >
          <Imgcontainer backgroundImageUrl={image}>
            {!image && (
              <img
                src="/images/img@3x.png"
                width={"64px"}
                style={{ marginTop: "30%", marginLeft: "40%" }}
              />
            )}
            <AddBtn
              src={image ? "/images/btn/edit.png" : "/images/btn/add_img.png"}
              onClick={() => document.getElementById("imageInput")?.click()} // 버튼 클릭 시 파일 선택기 열기
            />
            <input
              id="imageInput"
              type="file"
              style={{ display: "none" }} // 파일 선택기 숨기기
              onChange={handleImageUpload} // 파일이 선택되면 handleImageUpload 함수 호출
            />
          </Imgcontainer>
          <MemoContainer>
            <div>Memo</div>
            <div
              id="content"
              style={{
                backgroundColor: "#456",
                padding: "4px",
                marginTop: "18px",
              }}
            >
              너이러미ㅏ어라ㅣㅓㄴㅁ람ㅇㄴ리ㅏ머ㅏㄹㅇㅇㄹ
            </div>
          </MemoContainer>
        </div>
        <BtnContainer>
          <Btn src="/images/btn/edit_large_default.png" />
          <Btn src="/images/btn/delete_large.png" />
        </BtnContainer>
      </div>
    </div>
  );
}
