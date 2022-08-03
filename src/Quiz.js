import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {quiz_position: 1};
    }

    showNextQuestion() {
        this.setState(this.state.quiz_position = this.state.quiz_position + 1);
    }

    render() {
        // const isQuizEnd = quizData.quiz_questions.length - 1 === this.state.quiz_position ? true : false;
        const isQuizEnd = false;
        return (
            <div>
                {isQuizEnd ? <QuizEnd /> : <QuizQuestion showNextQuestionHandler={this.showNextQuestion.bind(this)} quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />}
            </div>
        )
    }
}

export default Quiz;