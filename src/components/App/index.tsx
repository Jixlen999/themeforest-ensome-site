import React from 'react';

interface IApp {
  text: string;
}

function App({ text }: IApp) {
  return <div>{text}a</div>;
}

export default App;
