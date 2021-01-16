import React from 'react';
import './css/Quiz.css';
import AnswerOption from './AnswerOption';
import { useStateValue } from './StateProvider';
import Result from './Result';

function Quiz() {
	const [{ questions, questionNumber, isButtonShow }, dispatch] = useStateValue();
	
	return (
		<div className="quiz">
			{questionNumber <= 9 ? 
			<div>
					<h1 className="quiz__question"> {questions[questionNumber]?.title} is the capital of</h1>			
					<div className="quiz__answerOptions">
						{
							questions[questionNumber] && questions[questionNumber]?.answers.map((answer, i) => (
								<AnswerOption key={i} answer={answer}
									correctAnswer={questions[questionNumber].correctAnswer}							
								/>
						))				
						}				
					</div>
					{
				isButtonShow ?
					<button className="button__next" onClick={
						() => {
							dispatch({
								type: "GET_NEXT_QUESTION"
							})
						}
					}>Next</button>
					: null
					}
		   </div>
		: <Result />
		}
		</div>
	)
}

export default Quiz;
