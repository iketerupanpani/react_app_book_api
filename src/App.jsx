import React from 'react';
import Booklist from './components/Booklist';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const languages = ['React', 'Vue', 'Angular','netflix'];
  const getDataFromAPI = async keyword => {
    const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
    const result = await axios.get(`${requestUrl}${keyword}`);
    return result;
  }
  return (
    <BrowserRouter>
      <div>
        <h1 style={{margin : 20 + "px"}}>BOOKS</h1>
        <div style={{margin : 20 + "px"}}>
          <button><Link to='/'>React</Link></button>
          <button><Link to='/vue'>Vue</Link></button>
          <button><Link to='/angular'>Angular</Link></button>
          <button><Link to='/netflix'>Netflix</Link></button>
          {/* <input type="text" value="" placeholder="ブックタイトル"></input>
            <button><Link to='/result'>Search</Link></button> */}
        </div>
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
        <Route 
          path='/netflix' 
          render = 
            {props => 
              <Booklist language = {languages[3]} 
              getData = {keyword => getDataFromAPI(keyword)} //getDataという名前で関数を渡す        
              />
          }
        /> 
        <Route 
          path='/result' 
          render = 
            {props => 
              <Booklist language = {languages[4]} 
              getData = {keyword => getDataFromAPI(keyword)} //getDataという名前で関数を渡す        
              />
          }
        /> 
      </div>
    </BrowserRouter>
  );
}
export default App;
