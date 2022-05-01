interface UserInterface {
  name: string;
  bio: string;
  contacts: string;
}

const style: React.CSSProperties = {
  backgroundColor: 'white',
  border: '1px solid red',
  color: '#666',
}

const User: React.FC = () => {
  const user: UserInterface = ({
    name: 'Agasi',
    bio: 'My name Agassi, I am a web programmer.',
    contacts: 'https://github.com/DevAgassi/'
  });

    return (
      <div style={style}>
        <h2>{user.name}</h2>
        <ul>
          <li>
            Contact: {user.contacts}
          </li>
          <li>
            About for me: {user.bio}
          </li>
        </ul>
      </div>
    );
  }
  
  export default User;