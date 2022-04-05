import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLayout from 'layouts/home-layout';
import Home from 'pages/home/Home';
import Projects from 'pages/home/Projects';
import Trash from 'pages/home/Trash';
import Settings from 'pages/home/Settings';
import About from 'pages/home/About';

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
