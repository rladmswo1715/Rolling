import { Routes, Route } from 'react-router-dom';
import IncludeHeaderStructure from './components/layout/IncludeHeaderStructure';
import Main from './pages/main/Main';
import RollingList from './pages/rollingList/RollingList';
import RollingPost from './pages/rollingPost/RollingPost';
import RollingPostEdit from './pages/rollingPostEdit/RollingPostEdit';
import RollingPostMessage from './pages/rollingPostMessage/RollingPostMessage';
import RollingPostCreate from './pages/rollingCreate/RollingPostCreate';
import NotFoundPage from './pages/error/NotFoundPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IncludeHeaderStructure />}>
          <Route index element={<Main />} />
          <Route path="list" element={<RollingList />} />
          <Route path="post" element={<RollingPostCreate />} />
          <Route path="post/:id" element={<RollingPost />} />
          <Route path="post/:id/edit" element={<RollingPostEdit />} />
          <Route path="post/:id/message" element={<RollingPostMessage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
