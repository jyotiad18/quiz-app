import React from 'react'
import "./css/Result.css";
import logo from "./images/undraw_winners_ao2o 2.svg"
import { useStateValue } from './StateProvider';

function Result() {
	const [{ totalCorrect }, dispatch] = useStateValue(); 
	const onTryHandler = () => {
		dispatch({
			type: "GET_QUESTION_AGAIN"
		})
	}
	return (
		<div className="result">
			<img src={logo} alt="" />	
			<h1 className="result__title">Results</h1>
			<h3  className="result__detail">You got <span className="result__number">{totalCorrect}</span> correct answers</h3>
			<button className="btn__tryagian" onClick={onTryHandler}>Try again</button> 
		</div>
	)
}

export default Result;
