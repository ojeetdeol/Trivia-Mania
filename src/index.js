import React from 'react'
import ReactDOM from 'react-dom'

const url = "https://opentdb.com/api.php?amount="

function fetch_questions(number_of_ques){
    fetch()

}


function Message(){
    return(
        <div>
        <div id = "top_logo">
            <h1 id = "top_logo_text">Trivia Mania</h1>
        </div>
        <div id ="num_questions">
            <input type = "text"  size = "30" placeholder="Enter Number Of Questions Desired"/>
            <button id = "submit_button">Enter</button>
        </div>
        
            
        
        </div>
    )
}

ReactDOM.render(<Message/>, document.getElementById('root'))