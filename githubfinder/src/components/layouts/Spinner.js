import React from 'react'
import spinner from './spinner.gif'
function Spinner() {
    return (
        <div className="container">
            <img src={spinner} alt="" style={spinnerStyle}/>
        </div>
    )
}

const spinnerStyle = {
    display:'block',
    width : '200px',
    margin : 'auto'
}
export default Spinner
