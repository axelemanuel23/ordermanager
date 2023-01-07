import React from "react"

function AddIngredients({ingredients, setIngredients}){
    const [ ingredientValue, setNewIngredient ] = React.useState("")

    const onIngredientAdd = (event) => {
        setNewIngredient(event.target.value)
    }

    const addIngredient = () => {
        const newIngredient = {
            text: ingredientValue
        }
        setIngredients([...ingredients, newIngredient])
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