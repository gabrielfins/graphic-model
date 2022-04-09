import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLayout from 'layouts/HomeLayout/home-layout';
import EditorLayout from 'layouts/EditorLayout/editor-layout';
import Home from 'pages/Home/Home/home';
import Projects from 'pages/Home/Projects/projects';
import Trash from 'pages/Home/Trash/trash';
import Settings from 'pages/Home/Settings/settings';
import About from 'pages/Home/About/about';
import Canvas from 'pages/Editor/Canvas/canvas';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="trash" element={<Trash />} />
          <Route path="settings" element={<Settings />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="editor" element={<EditorLayout />}>
          <Route path="project/:id" element={<Canvas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
