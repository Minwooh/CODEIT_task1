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
          <div id="l" style={{ backgroundColor: "#050" }}>
            djkf
            <div id="todo_list">
              <div id="todo" />
            </div>
          </div>
          <div id="r" style={{ backgroundColor: "#500" }}>
            sfsd
            <div id="done_list">
              <div id="done" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
