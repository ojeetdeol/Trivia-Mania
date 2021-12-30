import React from 'react'
import ReactDOM from 'react-dom'

function Message(){
    return(
        <div id = "top_logo">
            <h1 id = "top_logo_text">Trivia Mania</h1>
            <div id ="num_questions">
                <input type = "text"  size = "30" placeholder="Enter Number Of Questions Desired"/>
            </div>
            <button id = "submit_button">Enter</button>
        </div>
        
    )
}

ReactDOM.render(<Message/>, document.getElementById('root'))