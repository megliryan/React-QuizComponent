import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {incorrectAnswer: false};
    }

    handleClick(buttonText) {
        this.props.quiz_question.answer === buttonText ? this.props.showNextQuestionHandler() : null
        this.setState((state) => {
            return { incorrectAnswer: state.incorrectAnswer ? false : true }
        })
    }

    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((answer_options, index) =>
                            <QuizQuestionButton clickHandler={this.handleClick.bind(this)} key={index} button_text={answer_options} />
                        )}
                    </ul>
                </section>
                {this.state.incorrectAnswer ? <p className="error">Sorry, that's not right</p> : null}
            </main>
        )
    }
}

export default QuizQuestion;