import React from 'react'

function Button({ tipo, accion }) {
    return (
        <button onClick={accion}>{tipo}</button>
    )
}

export default Button