import React from 'react'
import ReactDOM from 'react-dom'

class Trivia extends React.Component{

    constructor(props){
        this.state= {
            question : this.props.question,
            correct_answer : this.props.correct_answer,
            answers : this.props.answer
        }
    }
    
    create_options(){
        let opts = []
        for(let i = 0; i <answers.length; i++){
            let opt = document.createElement("option")
            opt.value = answers[i]
            opt.text = answers[i]
            opts.push(opt)
        }
        return opts
    }


    render(){
        return (
            <div>
                <h1 id = "question_obj">{this.state.question}</h1>
                <select >
                    {this.create_options}
                </select>
            </div>
        )
    }
}
export default Trivia