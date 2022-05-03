import React from 'react'
import "./App.css"
import User from "./components/user/User";
import Comments from "./components/comment/Comments";

const App: React.FC = () => {
  return (
    <div className="App">
        <User />
        <Comments />
    </div>
  );
}

export default App;
