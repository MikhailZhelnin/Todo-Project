import React from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import Input from './components/Input/Input';
import TasksList from './components/TasksList/TasksList';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={theme ? 'todo' : 'todo todo__dark'}>
      <Header />
      <Input />
      <TasksList />
      <Footer />
    </div>
  );
}

export default App;
