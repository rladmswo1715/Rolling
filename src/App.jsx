import { Routes, Route } from 'react-router-dom';
import IncludeHeaderStructure from './components/layout/IncludeHeaderStructure';
import IncludeSubHeaderStructure from './components/layout/IncludeSubHeaderStructure';
import Main from './pages/main/Main';
import RollingList from './pages/rollingList/RollingList';
import RollingPost from './pages/rollingPost/RollingPost';
import RollingPostEdit from './pages/rollingPostEdit/RollingPostEdit';
import RollingPostMessage from './pages/rollingPostMessage/RollingPostMessage';
import RollingPostCreate from './pages/rollingCreate/RollingPostCreate';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IncludeHeaderStructure />}>
          <Route index element={<Main />} />
          <Route path="list" element={<RollingList />} />
          <Route path="post" element={<RollingPostCreate />} />
          <Route path="post/:id/message" element={<RollingPostMessage />} />
        </Route>

        <Route path="/post/:id" element={<IncludeSubHeaderStructure />}>
          <Route index element={<RollingPost />} />
          <Route path="edit" element={<RollingPostEdit />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
