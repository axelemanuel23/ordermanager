import React from "react"

function Ingredients({text}){
    return (
        <React.Fragment>
            <li>
                <p>{text}</p>
                <button>X</button>
            </li>
        </React.Fragment>
    )
}

export { Ingredients }