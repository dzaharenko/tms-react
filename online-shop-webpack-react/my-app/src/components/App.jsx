import React, { Component } from 'react';

import '../styles/components/App.css';

import HeaderBody from './HeaderBody.jsx';
import MainBody from './MainBody.jsx';

export default class App extends Component {
  render() {
    return (
        <>
            <HeaderBody />
            <MainBody />
        </>
    );
  }
}
