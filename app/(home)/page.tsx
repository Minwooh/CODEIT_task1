"use client";

import { useState, useEffect } from "react";
import { DoneImg, Middle1, TodoImg, Middle2 } from "../../components/home_td";
import InputAddContainer from "../../components/input";
import Navigation from "../../components/navigation";
import ToDo from "../../components/style/todo";
import Done from "../../components/style/done";

interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
}

export default function HomePage() {
  const [todoList, setTodoList] = useState<TodoItem[]>([]); // 초기값 빈 배열
  const [doneList, setDoneList] = useState<TodoItem[]>([]); // 초기값 빈 배열
  const [tenantId] = useState("20211586");
  const [name, setName] = useState("");
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchItems = async () => {
    try {
      const res = await fetch(
        `https://assignment-todolist-api.vercel.app/api/${tenantId}/items`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch items");
      }

      const data: TodoItem[] = await res.json(); // 데이터 타입 지정
      setTodoList(data); // 가져온 데이터를 todoList에 저장
    } catch (error) {
      console.error("Error fetching items:", error);
      setError("Failed to load items.");
    }
  };

  // 컴포넌트가 마운트될 때 데이터를 가져오기
  useEffect(() => {
    fetchItems();
  }, [tenantId]);

  const handleSubmit = async (name: string) => {
    setName(name); // 입력된 이름 상태 저장

    try {
      const res = await fetch(
        `https://assignment-todolist-api.vercel.app/api/${tenantId}/items`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name }),
        }
      );

      if (!res.ok) {
        const errorResponse = await res.json();
        setError(`Server Error: ${errorResponse.error || "Unknown error"}`);
        console.log("Error Response:", errorResponse);
        setResponse(null);
        return;
      }

      const data = await res.json();
      setResponse(data);
      setError(null);
    } catch (err) {
      setError(`Something went wrong! ${err.message || ""}`);
      console.error("Error:", err); // 에러 로그 출력
    }
  };

  const handleAddTodo = (newTodo: TodoItem) => {
    setTodoList((prevTodos) => [...prevTodos, newTodo]); // 새로운 todo 추가
  };

  const handleMarkDone = (todo: TodoItem) => {
    setTodoList((prevTodos) => prevTodos.filter((item) => item.id !== todo.id)); // todo 완료 표시
    setDoneList((prevDone) => [...prevDone, todo]);
  };

  return (
    <div
      id="background"
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        backgroundColor: "#F9FAFB",
        flexDirection: "column", // 세로 정렬
        alignItems: "center", // 가로 방향 중앙 정렬
      }}
    >
      <Navigation />
      <div>
        <InputAddContainer handleSubmit={handleSubmit} />

        <div>
          {/* 오류 메시지 */}
          {error && <div style={{ color: "red" }}>{error}</div>}
          {response && <div>{JSON.stringify(response)}</div>}
        </div>

        <div
          id="content"
          style={{
            display: "flex", // 가로 정렬
            flexDirection: "row",
          }}
        >
          <Middle1>
            <TodoImg />
            <div
              id="todo_list"
              style={{
                backgroundColor: "#f8f",
                width: "590px",
                height: "490px",
                overflow: "auto",
              }}
            >
              {todoList.length === 0 ? (
                <>
                  <img
                    src="/images/todo_basic_large.png"
                    alt="할 일이 없습니다."
                    style={{
                      width: "240px",
                      height: "240px",
                      marginTop: "50px",
                      marginLeft: "160px",
                    }}
                  />
                  <div style={{ textAlign: "center" }}>할 일이 없어요</div>
                  <div style={{ textAlign: "center" }}>
                    TODO를 새롭게 추가해주세요!
                  </div>
                </>
              ) : (
                todoList.map((todo, index) => (
                  <ToDo
                    key={index}
                    value={todo.name}
                    onMarkDone={() => handleMarkDone(todo)}
                  />
                ))
              )}
            </div>
          </Middle1>
          <Middle2>
            <DoneImg />
            <div
              id="done_list"
              style={{
                backgroundColor: "#f8f",
                width: "590px",
                height: "490px",
                overflow: "auto",
              }}
            >
              {doneList.length === 0 ? (
                <>
                  <img
                    src="/images/done_basic_large.png"
                    alt="할 일이 없습니다."
                    style={{
                      width: "240px",
                      height: "240px",
                      marginTop: "50px",
                      marginLeft: "160px",
                    }}
                  />
                  <div style={{ textAlign: "center" }}>할 일이 없어요</div>
                  <div style={{ textAlign: "center" }}>
                    TODO를 새롭게 추가해주세요!
                  </div>
                </>
              ) : (
                doneList.map((doneItem, index) => (
                  <Done key={index} value={doneItem} />
                ))
              )}
            </div>
          </Middle2>
        </div>
      </div>
    </div>
  );
}
