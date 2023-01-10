import React from "react"
import axios from "axios"
import { Ingredients } from "./Ingredients"
import { AddIngredients } from "./AddIngredients"


function CreateForm(){

    const [ mealIngredients, setMealIngredients ] = React.useState([])
 
    const eventHandler = () => {
        const data = {
            name: document.querySelector("#nameMenu"),
            basePrice:document.querySelector("#priceMenu"),
            healthFilter:{
                meal: document.querySelector("#mealFilterMenu") || false,
                dairy: document.querySelector("#dairyFilterMenu") || false,
                flavour: document.querySelector("#flavourFilterMenu") || false
            },
            ingredients:[...mealIngredients]
        }
         if (data.filter( (prop) => !!prop )===6){
            addMenu(data)
        }else{
             alert("No se agrego")
        }
    }



    const addMenu = async (data) => {
        try {
            const res = await axios.post("https://axelemanuel23githubio-backend-production.up.railway.app/api/v1/meals", data ,{
                mode: "cors",
                credentials: "include",
                headers: {
                    "APIKEY": "axel",
                }
            })
            if(!!res){
                alert("Agregado")
            }else{
                alert("hubo un error")
            }
        }catch(err){
            console.log(err)
        }
    }

    return(
        <React.Fragment>
            <form className="createMenu-form">
                <label>
                    Nombre
                    <input id="nameMenu-text" type="text"></input>
                </label>
                <label>
                    Precio
                    <input id="priceMenu-text" type="number"></input>
                </label>
                <p>
                    Filtros
                    <label>
                        Carnes
                        <input id="meatFilterMenu-text" type="checkbox"></input>
                    </label>
                    <label>
                        Lacteos
                        <input id="dairyFilterMenu-text" type="checkbox"></input>
                    </label>
                    <label>
                        Harinas
                        <input id="flavourFilterMenu-text" type="checkbox"></input>
                    </label>
                </p>
                <p>
                    Ingredientes:
                </p>
                {console.log(mealIngredients)}
                <AddIngredients ingredients={mealIngredients} setIngredients={setMealIngredients}/>
                <button onClick={eventHandler}>Crear Menu</button>    
            </form>
            {
                    !!mealIngredients && mealIngredients.map( (ingredient) => ( 
                                                            <Ingredients key={ingredient.text} text={ingredient.text}/> 
                                                        ))
                }
                
        </React.Fragment>
    )
}

export { CreateForm }