import React from 'react';

interface IApp {
  text: string;
}

const App = ({ text }: IApp) => <div>{text}</div>;

export default App;
