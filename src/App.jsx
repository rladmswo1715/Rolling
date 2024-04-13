import { Routes, Route } from "react-router-dom";
import IncludeHeaderStructure from "./components/layout/IncludeHeaderStructure";
import IncludeSubHeaderStructure from "./components/layout/IncludeSubHeaderStructure";
import Main from "./pages/main/Main";
import RollingList from "./pages/rollingList/RollingList";
import RollingPost from "./pages/rollingPost/RollingPost";
import RollingPostEdit from "./pages/rollingPostEdit/RollingPostEdit";
import RollingPostMessage from "./pages/rollingPostMessage/RollingPostMessage";
import RollingCreate from "./pages/rollingCreate/RollingCreate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IncludeHeaderStructure />}>
          <Route index element={<Main />} />
          <Route path="list" element={<RollingList />} />
          <Route path="rolling-create" element={<RollingCreate />} />
          <Route path="post/:id/message" element={<RollingPostMessage />} />
        </Route>

        <Route path="/post" element={<IncludeSubHeaderStructure />}>
          <Route path=":id" element={<RollingPost />} />
          <Route path=":id/edit" element={<RollingPostEdit />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
