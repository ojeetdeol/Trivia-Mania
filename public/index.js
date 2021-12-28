import React from 'react'
import ReactDOM from 'react-dom'

function message(){
    return(
        <div>
            <h1>Hello</h1>
        </div>
    )
}

ReactDOM.render(<message/>, document.getElementById('root'))