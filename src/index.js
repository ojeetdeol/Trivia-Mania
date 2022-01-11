import React from 'react'
import ReactDOM from 'react-dom'

const url = "https://opentdb.com/api.php?amount="

function fetch_questions(){
    var number_of_ques = document.getElementById('input').value
    if(!isNaN(number_of_ques)){
        var temp_num = parseInt(number_of_ques)
        fetch(url+number_of_ques)
        .then(res=>res.json())
        .then(data => console.log(data))
    }
    else{
        console.log(1)
        alert('You Did Not Enter A Number!')
    }
    
    

}


function Message(){
    return(
        <div>
        <div id = "top_logo">
            <h1 id = "top_logo_text">Trivia Mania</h1>
        </div>
        <div id ="num_questions">
            <input id = 'input' type = "text"  size = "30" placeholder="Enter Number Of Questions Desired"/>
            <button id = "submit_button" onClick = {fetch_questions}>Enter</button>
        </div>
        
            
        
        </div>
    )
}

ReactDOM.render(<Message/>, document.getElementById('root'))