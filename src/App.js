import React, { useEffect } from 'react';
import './css/App.css';
import logo from './images/undraw_adventure_4hum 1.svg';
import Quiz from './Quiz';
import { useStateValue } from './StateProvider';
import axios from './axios';

function App() {  
  const [{ questionNumber  }, dispatch] = useStateValue();  
  
  useEffect(() => {
    async function getAllData() {
      const request = await axios.get('?fields=name;capital;flag'); 
      dispatch({
        type: 'GET_LOADDATA',
        data: request.data
      })
    }    
    getAllData();
  }, [ dispatch ]); 
    
  return (
      <div className="app">
      <div className={(questionNumber <= 9 ? "app__header" : "app__header__complete")}>
        <h1 className="header__title">Country quiz</h1>
        {questionNumber <= 9 ? <img src={logo} alt="" /> : null}
        </div>
      <Quiz />
      <div className="app__footer">Jyoti ADHIAKRI @ DevChallenges.io</div>
      </div>    
    )  
}

export default App;
