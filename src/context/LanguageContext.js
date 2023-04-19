import React from 'react';

const LanguageContext = React.createContext({
  user: null,
  language: "en"
});

export default LanguageContext;