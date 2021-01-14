import React, { useState, useEffect } from 'react'
import './css/AnswerOption.css';
import { useStateValue } from './StateProvider';

function AnswerOption({ answer, correctAnswer}) {	
	const [{ isCorrect, isInCorrect }, dispatch] = useStateValue();  
	const [inCorrect, setInCorrect] = useState(isInCorrect);

	useEffect(() => {
		if (!isInCorrect) {
			setInCorrect(isInCorrect);
		}
	},[isInCorrect])
	
	const onClick = () => {	
		if (answer !== correctAnswer)
		{
			setInCorrect(true);
		}
		dispatch({
			type: "CHECK_ANSWER",
			answer: answer,
			correctAnswer: correctAnswer
		});		    
	}
	return (
		<div className={"answerOption " +  (inCorrect ? "answerOption__incorrect " : "") + (!inCorrect && answer === correctAnswer && isCorrect ? "answerOption__correct":"")} onClick={onClick}>
			<h1>{answer}</h1>
			{ inCorrect ? <i className="material-icons md-18">cancel</i> : null}
			{ !inCorrect && answer === correctAnswer && isCorrect ? <i className="material-icons md-18">check</i> : null }
		</div>
	)
}

export default AnswerOption;
