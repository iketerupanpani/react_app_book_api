import React from 'react';
import Booklist from './components/Booklist';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './index.css';

const App = () => {
  const languages = ['React', 'Vue', 'Angular'];
  const getDataFromAPI = async keyword => {
    const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
    const result = await axios.get(`${requestUrl}${keyword}`);
    return result;
  }
  return (
    <BrowserRouter>
      <div>
        <h1>本のラインナップ</h1>
        <ul>
          <li><Link to='/'>React</Link></li>
          <li><Link to='/vue'>Vue</Link></li>
          <li><Link to='/angular'>Angular</Link></li>
        </ul>
        <hr />
        <Route 
          exact 
          path='/' 
          render = {
            props => 
              <Booklist language = {languages[0]} 
              getData = {keyword => getDataFromAPI(keyword)} //getDataという名前で関数を渡す
              />
          }
        /> 
        <Route 
          path='/vue' 
          render = 
            {props => 
              <Booklist language = {languages[1]} 
              getData = {keyword => getDataFromAPI(keyword)} //getDataという名前で関数を渡す
              />
          }
        /> 
        <Route 
          path='/angular' 
          render = 
            {props => 
              <Booklist language = {languages[2]} 
              getData = {keyword => getDataFromAPI(keyword)} //getDataという名前で関数を渡す        
              />
          }
        /> 
      </div>
    </BrowserRouter>
  );
}
export default App;
