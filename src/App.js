import React, { Component } from 'react'
import Posts from './components/Posts'
import AddPosts from './components/PostForm'
import './App.css';
import {Provider} from 'react-redux'
import store from './store/store'



class App extends Component {
 

  render() {
    
    return (
      <Provider store={store}>
      <div>
        <AddPosts/>
        <Posts/>
      </div>
      </Provider>
    )
  }
}

export default App;
