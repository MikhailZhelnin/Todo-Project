import React from 'react';

import Header from './components/Header/Header';
import Input from './components/Input/Input';
import TasksList from './components/TasksList/TasksList';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
  return (
    <div className="todo">
      <Header />
      <Input />
      <TasksList />
      <Footer />
    </div>
  );
}

export default App;
