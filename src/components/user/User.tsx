import React, {useContext, useRef} from "react";
import {ScrollContext} from "../scroll-observer";
import LifeCircle from "../life-circle";


interface UserInterface {
  name: string;
  bio: string;
  contacts: string;
}

const User: React.FC = () => {
  const user: UserInterface = ({
    name: 'Agasi',
    bio: 'My name Agassi, I am a web programmer.',
    contacts: 'https://github.com/DevAgassi/'
  })

  const refContainer = useRef<HTMLDivElement>(null);
  const {scrollY} = useContext(ScrollContext);
  let progress = 0;
  const {current: elContainer} = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }
  return (
    <div id="appUser" ref={refContainer} className="container mx-auto mt-8 min-h-[100vh] sticky top-0"
         style={{transform: `translateY(-${progress * 20}vh`}}>
      <h2 className="text-5xl leading-normal">{user.name}</h2>
      <ul>
        <li>
          Contact: {user.contacts}
        </li>
        <li>
          About for me: {user.bio}
        </li>
        <li>
          <LifeCircle />
        </li>
      </ul>
    </div>
  );
}

export default User;
