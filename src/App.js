import React from 'react';
import logo from './logo.svg';
import './App.css';
import BlogList from './containers/BlogListContainer.js';
import BlogDetail from './containers/BlogDetailContainer';
function App() {
  return (
    <div className="App">
      <BlogList />
      <BlogDetail />
    </div>
  );
}

export default App;
