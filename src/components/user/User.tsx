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
  });

    return (
      <div className="container mx-auto mt-8">
        <h2 className="text-5xl leading-normal">{user.name}</h2>
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
