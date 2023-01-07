import React from "react"
import { Ingredients } from "./Ingredients"
import { AddIngredients } from "./AddIngredients"


function CreateForm(){

    const [ ingredients, setIngredients ] = React.useState([])
    
    return(
        <React.Fragment>
            <form className="createMenu-form">
                <label>
                    Nombre
                    <input type="text"></input>
                </label>
                <label>
                    Precio
                    <input type="number"></input>
                </label>
                <p>
                    Filtros
                    <label>
                        Carnes
                        <input type="checkbox"></input>
                    </label>
                    <label>
                        Lacteos
                        <input type="checkbox"></input>
                    </label>
                    <label>
                        Harinas
                        <input type="checkbox"></input>
                    </label>
                </p>
                <p>
                    Ingredientes:
                </p>
                {console.log(ingredients)}
                {
                    !!ingredients && ingredients.map( (ingredient) => ( 
                                                            <Ingredients key={ingredient.text} text={ingredient.text}/> 
                                                        ))
                }
                <AddIngredients ingredients={ingredients} setIngredients={setIngredients}/>       
            </form>
        </React.Fragment>
    )
}

export { CreateForm }