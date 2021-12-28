import React from 'react'
import reactDom from 'react-dom'

function message(){
    return(
        <div>
            <h1>Hello</h1>

        </div>
    )
}


ReactDom.render(<message/>, document.getElementById('root'))