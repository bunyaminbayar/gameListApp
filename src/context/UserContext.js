import React from 'react';

const UserContext = React.createContext({
  tabs: 0,
  user: null
});

export default UserContext;