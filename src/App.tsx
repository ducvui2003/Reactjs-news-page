import './App.css';
import 'bootstrap/scss/bootstrap.scss';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Home from './pages/Home';
import { NewsList } from './components/NewsList/NewsList';
import Detail from './pages/Detail';
import Page404 from './pages/Error/Page404';
import Login from './components/mobile/Login';
import React from 'react';
import Register from './components/mobile/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="/category/:id" element={<NewsList />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Route>
      <Route path="/mobile/">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
