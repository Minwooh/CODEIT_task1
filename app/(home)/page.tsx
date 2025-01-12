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
      <div id="background" style={{ backgroundColor: "#000" }}>
        <img src="/images/search@3x.png" alt="입력 창" />
        <input type="text" name="title" placeholder="할 일을 입력하세요" />

        <div id="content">
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
