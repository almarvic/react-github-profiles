import React from 'react';
import './App.css';

const Card = () => (
  <div className="github-profile">
    <img src="https://placehold.it/75" />
    <div className="info">
      <div className="name">Name here...</div>
      <div className="company">Company here...</div>
    </div>
  </div>
);

const App = ({ title }) => (
  <div>
    <div className="header">{this.props.title}</div>
    <Card />
  </div>
);

export default App;

