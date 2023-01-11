import React from "react"

function AddIngredients({ingredients, setIngredients}){
    const [ ingredientValue, setIngredientValue ] = React.useState("")

    const onIngredientAdd = (event) => {
        event.preventDefault()
        setIngredientValue(event.target.value)
    }

    const addIngredient = () => {
        setIngredients([...ingredients, ingredientValue])
        setIngredientValue("")
    }
    return (
        <React.Fragment>
                <label>
                    Añadir:
                    <input placeholder="Nuevo ingrediente" value={ingredientValue} onChange={onIngredientAdd}></input>
                </label>
                <button onClick={addIngredient}>Agregar</button>
            
        </React.Fragment>
    )
}

export { AddIngredients }