import React from 'react'
import ReactDOM from 'react-dom'

class Triva extends React.Component{

    constructor(props){
        this.state= {
            question : this.props.question,
            correct_answer : this.props.correct_answer,
            answers : this.props.answer
        }
    }
    create_dropdown_options(){
        for(let i = 0; i < this.answers.length; i++){
            let element = document.createElement("option")
            element.value = this.state.answers[i]
            document.
        }
    }

    render(){
        return (
            <div>
                <h1 id = "question_obj">{this.state.question}</h1>
                <select >
                    
                </select>
            </div>
        )
    }
}
export default Trivia