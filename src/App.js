import './App.css';
import { Book } from "./Book";
import React from 'react';

const App = () => {
  return (
    <div>
      <Book name="js" year="2018" price="1000" />
      <Book name="react" year="2018" price="10200" />
      <Book name="1C" year="2018" price="10008" />
    </div>
  );
};

export default App;
