import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Home from './pages/Home';
import { NewsList } from './components/NewsList/NewsList';
import Detail from './pages/Detail';
import Page404 from './pages/Error/Page404';
import Login from './components/mobile/Login';
import SaveNews from './pages/user/SaveNews';
import React from 'react';
import MainUser from './pages/MainUser';
import Info from './pages/user/Info';
import Comment from './pages/user/Comment';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category/:id" element={<NewsList />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/users/" element={<MainUser />}>
          <Route path="info" element={<Info />} />
          <Route path="save-news" element={<SaveNews />} />
          <Route path="comment" element={<Comment />} />
        </Route>
      </Route>
      <Route path="/mobile/">
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
