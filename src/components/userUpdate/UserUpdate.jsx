import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';

function UserUpdate() {
  const { username, setUsername } = useContext(UserContext);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
    </div>
  );
}

export default UserUpdate;
