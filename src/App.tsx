import React from 'react'
import "./App.css"
import User from "./components/user/User";
import Comments from "./components/comment/Comments";
import ScrollObserver from "./components/scroll-observer";

const App: React.FC = () => {
  return (
    <div className="App">
      <ScrollObserver>
        <User/>
        <Comments/>
      </ScrollObserver>
    </div>
  );
}

export default App;
