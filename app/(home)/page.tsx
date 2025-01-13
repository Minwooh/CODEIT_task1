import {
  DoneImg,
  Middle1,
  TodoImg,
  Middle2,
} from "../../components/home_td_style";
import InputAddContainer from "../../components/input";
import Navigation from "../../components/navigation";

const URL = "https://assignment-todolist-api.vercel.app/api";

async function getTodoList() {
  return fetch(URL).then((response) => response.json());
}

export default async function HomePage() {
  const todo_list = await getTodoList();

  return (
    <div>
      <Navigation />
      <div
        id="background"
        style={{
          display: "flex",
          backgroundColor: "#000",
          flexDirection: "column", // 세로 정렬
          alignItems: "center", // 가로 방향 중앙 정렬
          justifyContent: "center",
        }}
      >
        <InputAddContainer />

        <div
          id="content"
          style={{
            display: "flex", // 가로 정렬
            flexDirection: "row",
          }}
        >
          <Middle1>
            <TodoImg />
            <div id="todo_list" style={{ backgroundColor: "#f8f" }}>
              <div id="todo" />
            </div>
          </Middle1>
          <Middle2>
            <DoneImg />
            <div id="done_list">
              <div id="done" />
            </div>
          </Middle2>
        </div>
      </div>
    </div>
  );
}
