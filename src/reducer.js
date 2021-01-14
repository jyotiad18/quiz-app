export const initialState = {
	questions: [],
	totalQuestion: 10,
	totalCorrect: 0,
	isVisible: false,
	questionNumber: 0,
	isCorrect: false,
	isInCorrect: false,
	isButtonShow: false
}

export const reducer =  (state, action) => {    
	switch (action.type) {	
		case "GET_NEXT_QUESTION":
			return {
				...state,
				questionNumber: state.questionNumber + 1,
				isCorrect: false,				
				isButtonShow: false,
				isInCorrect: false
			}
		case "CHECK_ANSWER":			
			return {
				...state,
				isCorrect: true,
				totalCorrect: (action.answer === action.correctAnswer ? state.totalCorrect + 1 : state.totalCorrect),
				isButtonShow: true,
				isInCorrect: true
			}
		case "GET_QUESTION_AGAIN":
			return {
				...state,
				questionNumber: 0,
				isCorrect: false,				
				isButtonShow: false,
				isInCorrect: false,
				totalCorrect: 0
			}
		case "GET_LOADDATA":
			const data = action.data;			
			const quizList = [];
			const questions = [];		    
				 data.forEach((quiz) => {
					 const answers = [];
					 answers.push(quiz.name);
					 var q = {
						"title": quiz.capital,
						"answers": answers,
						"correctAnswer": quiz.name
					 }
				quizList.push(q);         
				});
			let j = 0; 
			while (j < 10) {
				let randomIdx = Math.floor(Math.random() * quizList.length);
				const question = quizList[randomIdx];
				let i = 0;
				while (i < 3) {
					const ca = quizList[randomIdx + (i + 1)];
					question.answers.push(ca.correctAnswer);
					i++;
				}
				questions.push(question);
				j++;
			}
			return {
				...state,
				questions: questions
			}		
		default:	
            return state;
    }
}