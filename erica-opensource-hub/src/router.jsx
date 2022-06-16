import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PostDetail from './pages/PostDetail';
import PostForm from './pages/PostForm';
import PostUpdateForm from './pages/PostUpdateForm';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post/:id/*" element={<PostDetail />} />
        <Route path="/post/:id/update" element={<PostUpdateForm />} />
        <Route path="/create" element={<PostForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
