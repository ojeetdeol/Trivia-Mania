import React from 'react'
import ReactDOM from 'react-dom'

function Message(){
    return(
        <div>
            <input type = "text" id ="num_questions" size = "30" placeholder="Enter Number Of Questions Desired"/>
    
    
        </div>
    )
}

ReactDOM.render(<Message/>, document.getElementById('root'))