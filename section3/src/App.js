import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const fullname = {
  ryoma: `坂本龍馬`,
  taka: `西郷隆盛`,
  kai: `勝海舟`,
};

const inputValue = 'some valuesdd';
const element = <input type="text" value={inputValue} />;
const element1 = <input type="checkbox" checked />;
const element2 = <input type="checkbox" checked={true} />;

const element3 = <input tyep="text" onClick={() => {}} />;

const getFullname = nickname => fullname[nickname];

const element4 = (
  <label
    htmlFor="..."
    className="label"
    >hoge</label>
);

const heading = (
  <h1>
    Hello, <strong>JSX</strong>
  </h1>
);

function Hello(name) {
  if (typeof name === `string`) {
    return <h1>Hello, {name}</h1>;
  }
  return <h1>Who are you?</h1>;
}

function Name(names) {
  const list = [];
  for (let i = 0; i < names.length; i++) {
    list.push(<li>{names[i]}</li>);
  }
  return <ul>{list}</ul>
}

function wrap(component) {
  return <div>{component}</div>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {getFullname(`ryoma`)}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {Hello('onojun')}
          {Hello(1234)}
        </div>
        <div>
          {Name('test')}
        </div>
        {wrap(<h1>Hello, Waperd</h1>)}
        {element}
        {element1}
        {element2}
        {element4}
        {wrap(element4)}
        {wrap(heading)}
      </div>
    );
  }
}

export default App;
