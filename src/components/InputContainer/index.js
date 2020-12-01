import React from "react"

import './style.css'

function InputContainer ({onChange}) {
    return(
        <section className='inputContainer'>
            <div className='inputWrapper'>
                <div className='label'>
                    <h3>Enter Game Type</h3> <span>(V75, V64, V64 or V4)</span>
                </div>
                <input 
                    onChange={onChange}
                    placeholder="Game Type..."
                    className='gameTypeInput'
                />
            </div>
        </section>
    )
}

export default InputContainer

