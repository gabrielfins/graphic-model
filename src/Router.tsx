import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLayout from 'layouts/home-layout/home-layout';
import Home from 'pages/Home/home';
import Projects from 'pages/Projects/projects';
import Trash from 'pages/Trash/trash';
import Settings from 'pages/Settings/settings';
import About from 'pages/About/about';

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
      </Routes>
    </BrowserRouter>
  );
}
